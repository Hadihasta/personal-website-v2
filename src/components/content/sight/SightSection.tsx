'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { trueSight, statusConfig } from '@/app/sight/sightData'
import styles from './SightSection.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TrueSightSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // ── Header entrance ──
        gsap.from('.sight-header', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          delay: 0.2,
        })

        // ── Timeline items: year from left, content from right ──
        gsap.utils.toArray<HTMLElement>('.timeline-year').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 82%' },
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          })
        })

        gsap.utils.toArray<HTMLElement>('.timeline-content').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 82%' },
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          })
        })

        // ── Photo thumbnails stagger ──
        gsap.utils.toArray<HTMLElement>('.media-thumb').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 88%' },
            scale: 0.85,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.4)',
          })
        })

        // ── Vertical progress line drawing ──
        if (progressLineRef.current && timelineRef.current) {
          gsap.to(progressLineRef.current, {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 1,
            },
          })
        }
      }, timelineRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <>
      <section className={styles.section}>
        {/* Header */}
        <div className={`${styles.header} sight-header`}>
          <h1 className={styles.title}>True Sight</h1>
          <p className={styles.subtitle}>
            True Sight is a personal timeline of what truly happened along my journey — the moments,
            decisions, and experiences that shaped who I am today.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className={styles.timeline}>
          {/* Vertical progress line */}
          <div
            ref={progressLineRef}
            className={styles.progressLine}
            style={{ transform: 'scaleY(0)', transformOrigin: 'top center' }}
          />

          {trueSight.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              {/* Year */}
              <div className={`${styles.year} timeline-year`}>{item.year}</div>

              {/* Content */}
              <div className={`${styles.content} timeline-content`}>
                <div className={styles.titleRow}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <span className={`${styles.badge} ${statusConfig[item.status].className}`}>
                    {statusConfig[item.status].label}
                  </span>
                </div>

                <p className={styles.location}>{item.location}</p>
                <p className={styles.description}>{item.description}</p>

                {/* Media Thumbnails */}
                {item.media && (
                  <div className={styles.mediaGrid}>
                    {item.media.map((media, i) =>
                      media.type === 'image' ? (
                        <button
                          key={i}
                          onClick={() => setActiveImage(media.src)}
                          className={`${styles.thumbnail} media-thumb`}
                        >
                          <Image
                            src={media.src}
                            alt={item.title}
                            width={180}
                            height={120}
                            className={styles.thumbnailImage}
                          />
                        </button>
                      ) : (
                        <video
                          key={i}
                          src={media.src}
                          controls
                          className={`${styles.video} media-thumb`}
                        />
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div className={styles.overlay} onClick={() => setActiveImage(null)}>
          <div className={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setActiveImage(null)}>
              Close ✕
            </button>
            <Image
              src={activeImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </>
  )
}
