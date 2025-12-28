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
      <div className={styles.layout}>
        <div className="text-4xl">{`I'm Hadi`}</div>
        <div className="mt-5">{`I work as a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</div>
        <div
          id="section button"
          className={`${styles.relative}flex-row gap-4 mt-10`}
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
        {/* <div className=''> */}

        <div className="absolute right-0 icons">
          <IconBrandUpwork className={`${styles.icons_1} rotate-y-25 rotate-z-30 rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`} />
          <IconBrandTypescript className={`${styles.icons_2} rotate-y-25 rotate-z-30 rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`} />
          <IconBrandNextjs className={`${styles.icons_3} rotate-y-25 rotate-z-30 rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`} />
          <IconBrandTailwind className={`${styles.icons_4} rotate-y-25 rotate-z-30 rounded-full cursor-pointer size-10 p-2 ring-1 ring-gray-900/5 dark:bg-blueDark dark:ring-white/20`} />

        </div>

        <div className="absolute right-0 ">
          <Image
            src="../asset-v2/vektor/matrix_left.svg"
            alt="Matrix_left"
            width={100}
            height={100}
            className={styles.matrix_left}
          />
          <Image
            src="../asset-v2/vektor/matrix_right.svg"
            alt="Matrix_right"
            width={100}
            height={100}
            className=" "
          />
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default FirstSection
