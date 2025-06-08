// src/components/Background.jsx
import React from 'react'
import Particles from 'react-tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'

export default function Background() {
  const options = {
    preset: 'stars',
    background: {
      color: {
        value: 'transparent'
      }
    },
    particles: {
      color: { value: '#ffffff10' },
      number: { value: 100, density: { enable: true, area: 800 } },
      size: { value: { min: 0.5, max: 2 } },
      move: { speed: 0.2 },
    }
  }

  return (
    <Particles
      id="tsparticles"
      init={async (engine) => {
        await loadStarsPreset(engine)
      }}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  )
}
