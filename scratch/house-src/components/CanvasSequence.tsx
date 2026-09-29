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
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

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
      <div id="loader" className={!showLoader ? 'hidden' : ''}>
        <div className="loader-text">Loading Experience {Math.floor(progress)}%</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
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
