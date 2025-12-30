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
} from '@tabler/icons-react'
const FirstSection = () => {
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
          <button>Project</button>
          <button>More About Me</button>
        </div>

        <div
          id="sosial-media"
          className="mt-10 flex-row gap-2"
        >
          <IconBrandGithub className="rounded-full  cursor-pointer size-10 p-2 ring-1 ring-blueDark dark:bg-blueDark dark:ring-white/20" />
          <IconFile className="rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20" />
          <IconBrandLinkedin className="rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20" />
          <IconBrandTwitter className="rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20" />
        </div>

        <div className={styles.iconArea}>
          {/* ICONS */}
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
            className={`${styles.matrix} relative bottom-26 left-5`}
          />
          <Image
            src="../asset-v2/vektor/arrow_up.svg"
            alt="Matrix_left"
            width={100}
            height={100}
            className={styles.matrix_left}
          />
        </div>
      </div>
    </>
  )
}

export default FirstSection
