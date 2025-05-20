"use client"
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

const FloatingCodeSymbol = ({ position, color, symbol }) => {
  const meshRef = useRef()
  const initialPosition = useMemo(() => new THREE.Vector3(...position), [position])
  const speed = useMemo(() => Math.random() * 0.1 + 0.05, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.position.x = initialPosition.x + Math.sin(t * speed) * 0.5
    meshRef.current.position.y = initialPosition.y + Math.cos(t * speed) * 0.5
    meshRef.current.position.z = initialPosition.z + Math.sin(t * speed) * 0.5
    meshRef.current.rotation.x = t * speed
    meshRef.current.rotation.y = t * speed
  })

  return (
    <group ref={meshRef} position={position}>
      <Html center>
        <div style={{
          color,
          fontSize: '2rem',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          userSelect: 'none',
          textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          opacity: 0.8 // Added opacity
        }}>
          {symbol}
        </div>
      </Html>
    </group>
  )
}

const CodingBackground = () => {
  const codingSymbols = useMemo(() => [
    '<div>', '</>', '{...}', '=>', 'const', 'function', 'return', 'if', 'else', 'while'
  ], [])

  const particles = useMemo(() => {
    // Adjusted colors (less bright)
    const colors = ['#2c8aa3', '#817724', '#74392a', '#352c42']
    
    return Array.from({ length: 12 }, (_, i) => ({
      symbol: codingSymbols[i % codingSymbols.length],
      color: colors[i % colors.length],
      position: [
        (Math.random() - 0.5) * 16, // Increased spread (x-axis)
        (Math.random() - 0.5) * 10, // Increased spread (y-axis)
        (Math.random() - 0.5) * 16  // Increased spread (z-axis)
      ]
    }))
  }, [codingSymbols])

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}> {/* Increased camera distance */}
        <ambientLight intensity={0.3} /> {/* Reduced light intensity */}
        <pointLight position={[10, 10, 10]} intensity={0.5} /> 

        {particles.map((p, i) => (
          <FloatingCodeSymbol key={i} {...p} />
        ))}

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default CodingBackground
