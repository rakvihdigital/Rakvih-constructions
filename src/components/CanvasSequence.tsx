'use client'

import { useEffect, useRef, useState } from 'react'

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
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image()
        img.src = getFramePath(i)

        const handleLoad = () => {
          loadedCount++
          const p = (loadedCount / TOTAL_FRAMES) * 100
          setProgress(p)

          if (i === 1) {
            setIsLoaded(true)
            drawImageCover(imagesRef.current[1])
          }

          if (loadedCount === TOTAL_FRAMES) {
            setTimeout(() => {
              setShowLoader(false)
            }, 300)
          }
        }

        img.onload = handleLoad
        img.onerror = handleLoad

        imagesRef.current[i] = img
      }
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
      <div id="premium-loader" className={`fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${!showLoader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
        
        {/* Outer decorative ring */}
        <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.03] animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-gold/[0.05] animate-[spin_30s_linear_infinite_reverse]" />
        
        <div className="relative flex flex-col items-center">
          {/* Logo with glow ring */}
          <div className="relative mb-10">
            {/* Pulsing glow behind logo */}
            <div className="absolute inset-0 -m-6 bg-gold/10 rounded-full blur-[40px] animate-pulse pointer-events-none" />
            {/* Spinning border ring */}
            <div className="absolute -inset-6 rounded-full border border-dashed border-gold/20 animate-[spin_8s_linear_infinite]" />
            {/* Logo */}
            <img
              src="/logo-transparent.png"
              alt="Rakvih"
              className="w-32 h-auto relative z-10 animate-fade-in-up"
            />
          </div>

          {/* Tagline */}
          <p className="text-white/40 text-sm tracking-[0.35em] uppercase font-light mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Spaces Beyond Expectations
          </p>

          {/* Progress bar */}
          <div className="w-64 relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(212,175,55,0.5)]" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase font-light">Loading</span>
              <span className="text-gold text-[10px] tracking-[0.2em] font-medium">{Math.floor(progress)}%</span>
            </div>
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
