import React from 'react'
import Link from 'next/link'

const FooterLayout = () => {
  return (
    <div className="text-white">
      <div className="h-px w-full bg-blueDisable/30 flex-1" />

      <div className="my-4">
        <div className="font-bold font-rowdies text-blueLine">Hijri Ismail Hadi</div>
        <div className="text-sm text-white/50 font-staat tracking-widest uppercase">Fullstack Developer · React · Next.js</div>
      </div>

      <div className="my-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* General */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-blueLine tracking-widest uppercase font-staat">General</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/sight" className="hover:text-white transition">Sight</Link></li>
              <li><Link href="/more" className="hover:text-white transition">More</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-blueLine tracking-widest uppercase font-staat">Tools</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="https://github.com/Hadihasta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Notion</a></li>
              <li><a href="https://excalidraw.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Excalidraw</a></li>
              <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ChatGPT</a></li>
              <li><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Unsplash</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-blueLine tracking-widest uppercase font-staat">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href="mailto:Hijrihadi@gmail.com" className="hover:text-white transition">
                  Hijrihadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-blueDisable/30 flex-1" />

      <div className="text-center text-sm text-white/30 py-4">
        <p className="flex items-center justify-center gap-1">
          <i className="i-tabler-copyright" aria-hidden="true" />
          <span>2025 Hijri Ismail Hadi. All rights reserved.</span>
        </p>
      </div>
    </div>
  )
}

export default FooterLayout
