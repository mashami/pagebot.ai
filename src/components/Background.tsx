"use client"

import { BackgroundColor, StarsBackground } from "./SVGs/SVGs"

const Background = () => {
  return (
    <div className="relative">
      <span className="absolute">
        <BackgroundColor />
      </span>
      <span className="absolute top-16">
        <StarsBackground />
      </span>
    </div>
  )
}

export default Background
