'use client'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import styles from './FirstSection.module.css'
import Image from 'next/image'
import {
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandGithub,
  IconBrandUpwork,
  IconBrandLinkedin,
  IconFile,
  IconBrandTwitter,
  IconArrowUpRight,
} from '@tabler/icons-react'
const FirstSection = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className={`${styles.layout} lg:max-w-[60rem] mx-auto`}>
        <div className="text-4xl">{`I'm Hadi`}</div>
        <div
          className={`${styles.paragraf} mt-5`}
        >{`I work as a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</div>
        <div
          id="section button"
          className={`flex-row gap-4 mt-10`}
        >
          {/* <button className={`${styles.buttonBorder}`}>Project</button> */}
          <button className={`${styles.buttonBorder}`}>More About Me</button>
        </div>

        <div
          id="sosial-media"
          onMouseMove={handleMove}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`mt-10 flex w-fit gap-2 relative ${styles.hideCursor}`}
        >
          {/* Custom Cursor */}
          <IconArrowUpRight
            className={`${styles.cursorArrow} ${active ? styles.show : ''}`}
            style={{
              left: cursor.x,
              top: cursor.y,
            }}
          />

          <IconBrandGithub
            onClick={() => openLink('https://github.com/Hadihasta')}
            className={`${styles.hideCursor} size-10 p-2 rounded-full cursor-pointer ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`}
          />

          <a href="resume/HIJRI ISMAIL HADI_CV Des.pdf">
            <IconFile
              className={`${styles.hideCursor} size-10 p-2 rounded-full cursor-pointer ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`}
            />
          </a>

          <IconBrandLinkedin
            onClick={() => openLink('https://www.linkedin.com/in/hijri-hadi-22289b23a/')}
            className={`${styles.hideCursor} size-10 p-2 rounded-full cursor-pointer ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`}
          />

          <IconBrandTwitter
            onClick={() => openLink('https://x.com/hadiasta_')}
            className={`${styles.hideCursor} size-10 p-2 rounded-full cursor-pointer ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`}
          />
        </div>

        <div className={styles.iconArea}>
          <div className={styles.icons}>
            <IconBrandUpwork className={`${styles.icon} ${styles.icon1}`} />
            <IconBrandTypescript className={`${styles.icon} ${styles.icon2}`} />
            <IconBrandNextjs className={`${styles.icon} ${styles.icon3}`} />
            <IconBrandTailwind className={`${styles.icon} ${styles.icon4}`} />
          </div>

          {/* IMAGE */}
          <Image
            src="../asset-v2/vektor/matrix_left.svg"
            alt="Matrix"
            width={100}
            height={100}
            className={`${styles.matrix} absolute`}
          />
          <Image
            src="../asset-v2/vektor/matrix_right.svg"
            alt="Matrix_right"
            width={100}
            height={100}
            className={`${styles.matrix} relative bottom-26 left-5 `}
          />
          <Image
            src="../asset-v2/vektor/arrow_up.svg"
            alt="Matrix_left"
            width={100}
            height={100}
            className={`${styles.matrix_left} infinite-bounce`}
          />
        </div>
      </div>
    </>
  )
}

export default FirstSection
