"use client"

import React from "react"
import Svg from "./Svg"

interface CardProps {
  title: string
  icon: React.ReactNode
  description: string
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <div
      className="min-w-[252px] p-[18px] bg-[#211833] border-[0.5px] border-[#634B9D] rounded-[16px] space-y-[18px]"
      style={{
        boxShadow: "0px -4px 20px 0px #140F1F inset"
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-[#C7C7C7] text-[15px] font-medium">{title}</p>
        <Svg svg={icon} />
      </div>
      <h4 className="text-[#C7C7C7] text-[12px] leading-[18px] md:pr-0 pr-20">
        {description}
      </h4>
    </div>
  )
}

export default Card
