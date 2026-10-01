'use client'

import { useEffect, useRef, useState, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const SEQ0_FRAMES = 239
const SEQ1_FRAMES = 299
const SEQ2_FRAMES = 300
const SEQ3_FRAMES = 300
const TOTAL_FRAMES = SEQ0_FRAMES + SEQ1_FRAMES + SEQ2_FRAMES + SEQ3_FRAMES // 1138 total
const LERP_FACTOR = 0.09

function getFramePath(frameIndex: number) {
  if (frameIndex <= SEQ0_FRAMES) {
    const paddedIndex = String(frameIndex).padStart(3, '0')
    return `/seq0/ezgif-frame-${paddedIndex}.jpg`
  } else if (frameIndex <= SEQ0_FRAMES + SEQ1_FRAMES) {
    const seq1Index = frameIndex - SEQ0_FRAMES
    const paddedIndex = String(seq1Index).padStart(3, '0')
    return `/seq1/ezgif-frame-${paddedIndex}.jpg`
  } else if (frameIndex <= SEQ0_FRAMES + SEQ1_FRAMES + SEQ2_FRAMES) {
    const seq2Index = frameIndex - (SEQ0_FRAMES + SEQ1_FRAMES)
    const paddedIndex = String(seq2Index).padStart(3, '0')
    return `/seq2/ezgif-frame-${paddedIndex}.jpg`
  } else {
    const seq3Index = frameIndex - (SEQ0_FRAMES + SEQ1_FRAMES + SEQ2_FRAMES)
    const paddedIndex = String(seq3Index).padStart(3, '0')
    return `/seq3/ezgif-frame-${paddedIndex}.jpg`
  }
}

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const currentFrameRef = useRef(1)
  const targetFrameRef = useRef(1)
  const isScrolledRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true })
    if (!ctx) return

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    let loadedCount = 0

    function drawImageCover(img: HTMLImageElement | null) {
      if (!img || !img.complete || img.naturalWidth === 0) return
      if (!canvas || !ctx) return

      const dpr = Math.max(window.devicePixelRatio || 1, 2)
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      const targetWidth = Math.round(viewportWidth * dpr)
      const targetHeight = Math.round(viewportHeight * dpr)

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth
        canvas.height = targetHeight
      }

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      const imgAspect = img.naturalWidth / img.naturalHeight
      const windowAspect = viewportWidth / viewportHeight
      let renderWidth, renderHeight, offsetX, offsetY

      if (windowAspect > imgAspect) {
        renderWidth = viewportWidth
        renderHeight = viewportWidth / imgAspect
        offsetX = 0
        offsetY = (viewportHeight - renderHeight) / 2
      } else {
        renderHeight = viewportHeight
        renderWidth = viewportHeight * imgAspect
        offsetX = (viewportWidth - renderWidth) / 2
        offsetY = 0
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight)
      ctx.restore()
    }

    function preloadImages() {
      let currentLoadIndex = 1
      const BATCH_SIZE = 40
      const ESSENTIAL_FRAMES = Math.min(150, TOTAL_FRAMES)
      let loaderHidden = false

      function loadNextBatch() {
        if (currentLoadIndex > TOTAL_FRAMES) return

        let loadedInBatch = 0
        const endIndex = Math.min(currentLoadIndex + BATCH_SIZE - 1, TOTAL_FRAMES)
        const batchCount = endIndex - currentLoadIndex + 1

        for (let i = currentLoadIndex; i <= endIndex; i++) {
          const img = new Image()
          img.src = getFramePath(i)

          const handleLoad = () => {
            loadedCount++
            
            // Progress bar is driven by the first ESSENTIAL_FRAMES to not block the user
            const p = Math.min(100, (loadedCount / ESSENTIAL_FRAMES) * 100)
            setProgress(p)

            if (i === 1) {
              setIsLoaded(true)
              drawImageCover(imagesRef.current[1])
            }

            loadedInBatch++

            if (loadedInBatch === batchCount) {
              currentLoadIndex += BATCH_SIZE
              loadNextBatch()
            }

            if (loadedCount >= ESSENTIAL_FRAMES && !loaderHidden) {
              loaderHidden = true
              setTimeout(() => {
                setShowLoader(false)
              }, 400)
            }
          }

          img.onload = handleLoad
          img.onerror = handleLoad

          imagesRef.current[i] = img
        }
      }

      loadNextBatch()
    }

    function updateScrollState() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const appContainer = document.getElementById('app')
      const totalHeight = appContainer ? appContainer.offsetHeight : document.documentElement.scrollHeight
      const maxScroll = totalHeight - window.innerHeight

      const introOverlay = document.getElementById('intro-overlay')
      if (introOverlay) {
        if (scrollTop > 50) {
          introOverlay.classList.add('is-scrolled')
        } else {
          introOverlay.classList.remove('is-scrolled')
        }
      }

      if (maxScroll <= 0) return

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll))
      targetFrameRef.current = 1 + scrollFraction * (TOTAL_FRAMES - 1)
    }

    let animationId: number
    function animate() {
      updateScrollState()
      
      const diff = targetFrameRef.current - currentFrameRef.current
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * LERP_FACTOR
      } else {
        currentFrameRef.current = targetFrameRef.current
      }

      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrameRef.current)))

      if (imagesRef.current[frameIndex] && imagesRef.current[frameIndex]!.complete) {
        drawImageCover(imagesRef.current[frameIndex])
      } else {
        let nearestIndex = frameIndex
        while (nearestIndex > 1 && (!imagesRef.current[nearestIndex] || !imagesRef.current[nearestIndex]!.complete)) {
          nearestIndex--
        }
        if (imagesRef.current[nearestIndex] && imagesRef.current[nearestIndex]!.complete) {
          drawImageCover(imagesRef.current[nearestIndex])
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    preloadImages()
    animate()

    const handleResize = () => {
      const frameToRender = Math.round(currentFrameRef.current)
      if (imagesRef.current[frameToRender] && imagesRef.current[frameToRender]!.complete) {
        drawImageCover(imagesRef.current[frameToRender])
      }
    }
    window.addEventListener('resize', handleResize)

    const safetyTimeout = setTimeout(() => {
      setIsLoaded(true)
      setShowLoader(false)
    }, 15000)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      clearTimeout(safetyTimeout)
    }
  }, [])

  return (
    <>
      <div id="premium-loader" suppressHydrationWarning className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-[1.5s] ease-[cubic-bezier(0.76,0,0.24,1)] ${!showLoader ? 'opacity-0 pointer-events-none scale-[1.05]' : 'opacity-100 scale-100'}`}>
        {/* Top curtain half */}
        <div className={`absolute top-0 left-0 right-0 bg-dark-bg transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] z-20 ${!showLoader ? 'h-0' : 'h-1/2'}`} />
        {/* Bottom curtain half */}
        <div className={`absolute bottom-0 left-0 right-0 bg-dark-bg transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] z-20 ${!showLoader ? 'h-0' : 'h-1/2'}`} />
        
        {/* Content layer */}
        <div className="relative z-30 flex flex-col items-center justify-center w-full px-8 gap-10">
          {/* Text Logo */}
          <div className="flex flex-col items-center justify-center animate-fade-in-up">
            <span className="font-serif text-[38px] leading-none tracking-normal text-white">
              RAKVIH
            </span>
            <span className="font-sans text-[9px] leading-none tracking-[0.23em] font-medium text-white/90 mt-1 ml-0.5">
              CONSTRUCTIONS & DEVELOPERS
            </span>
          </div>

          {/* Simple thin progress line */}
          <div className="w-full max-w-[200px] flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full relative h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#FFD400] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-white/40 text-[10px] tracking-[0.2em] font-medium uppercase tabular-nums">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>
      </div>
      <canvas
        id="sequence-canvas"
        ref={canvasRef}
        className={isLoaded ? 'loaded' : ''}
      ></canvas>
    </>
  )
}
