"use client"

import { BackgroundColor, StarsBackground } from "./SVGs/SVGs"

const Background = () => {
  return (
    <div className="relative">
      <span className="absolute w-screen overflow-hidden">
        <BackgroundColor />
      </span>
      <span className="absolute top-16 w-screen overflow-hidden">
        <StarsBackground />
      </span>
    </div>
  )
}

export default Background
