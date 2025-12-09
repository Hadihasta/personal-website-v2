'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import * as THREE from 'three'

const MainSection = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // ✅ SCENE
    const scene = new THREE.Scene()

    // ✅ CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // ✅ RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )

    mountRef.current.appendChild(renderer.domElement)

    // ✅ OBJECT
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // ✅ ANIMATION
    const animate = () => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    // ✅ CLEANUP
    return () => {
      renderer.dispose()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="relative min-h-screen  text-white flex flex-col items-center justify-center">
      
      {/* ✅ THREE.JS CANVAS */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
      />

      {/* ✅ CONTENT DI ATAS CANVAS */}
      <div className="relative z-10 text-center space-y-4 max-w-xl">
        <p>
          I’m a front-end developer crafting modern web applications using React
          cycle, with a strong focus on clean code and intuitive UI/UX.
        </p>

        <div>Services</div>

        <Image
          src="/asset/personal/close-up-no-bg.svg"
          alt="Hadi"
          width={250}
          height={250}
          className="mx-auto"
        />
      </div>
    </div>
  )
}

export default MainSection
