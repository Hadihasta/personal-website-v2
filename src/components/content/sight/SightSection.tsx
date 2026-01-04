'use client'

import { useState } from 'react'
import Image from 'next/image'
import { trueSight, statusConfig } from '@/app/sight/sightData'
import styles from './SightSection.module.css'

export default function TrueSightSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <section className={styles.section}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>True Sight</h1>

          <p className={styles.subtitle}>
            True Sight is a personal timeline of what truly happened along my
            journey the moments, decisions, and experiences that shaped who I
            am today.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {trueSight.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              {/* Year */}
              <div className={styles.year}>{item.year}</div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>

                  <span
                    className={`${styles.badge} ${statusConfig[item.status].className}`}
                  >
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
                          className={styles.thumbnail}
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
                          className={styles.video}
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
        <div
          className={styles.overlay}
          onClick={() => setActiveImage(null)}
        >
          <div
            className={styles.lightbox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setActiveImage(null)}
            >
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
