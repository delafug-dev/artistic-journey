import React from 'react'

export const EffectGradient = () => {
  return (
    <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
    </div>

  )
}
