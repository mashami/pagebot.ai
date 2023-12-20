"use client"

import { cn } from "@/lib/utils"

interface HeadAboutProps {
  bgColor: string
  text: string
  boxShadow: string
}
const HeadAbout = ({ bgColor, text, boxShadow }: HeadAboutProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-[12px] py-2 rounded-full"
      )}
      style={{
        background: bgColor,
        boxShadow: boxShadow
      }}
    >
      <p className="text-[14px] text-white font-medium leading-5 px-[8px] py-[2px]">
        {text}
      </p>
    </div>
  )
}

export default HeadAbout
