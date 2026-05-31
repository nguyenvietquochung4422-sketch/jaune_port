import { useEffect, useRef, useCallback } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4'

const SENSITIVITY = 0.8

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevXRef = useRef<number | null>(null)
  const targetTimeRef = useRef(0)
  const seekingRef = useRef(false)

  const seekTo = useCallback((time: number) => {
    const video = videoRef.current
    if (!video) return
    targetTimeRef.current = time
    if (!seekingRef.current) {
      seekingRef.current = true
      video.currentTime = time
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleSeeked = () => {
      const video = videoRef.current
      if (!video) return
      // If target has moved while we were seeking, seek again
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.001) {
        video.currentTime = targetTimeRef.current
      } else {
        seekingRef.current = false
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }
      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      const vid = videoRef.current
      if (!vid || !vid.duration || isNaN(vid.duration)) return

      const offset = (delta / window.innerWidth) * SENSITIVITY * vid.duration
      const next = Math.max(0, Math.min(vid.duration, targetTimeRef.current + offset))
      seekTo(next)
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      video.removeEventListener('seeked', handleSeeked)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [seekTo])

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '70% center',
      }}
    />
  )
}
