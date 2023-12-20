"use client"

import { cn } from "@/lib/utils"

interface CheckBoxProps {
  onClick?: () => void

  text: string
  className?: string
  isSelected: boolean
}
const CheckBox = ({
  text,

  className,
  isSelected,
  onClick
}: CheckBoxProps) => {
  // console.log("hello")
  // console.log(isSelected)

  return (
    <div className="flex space-x-3 items-center">
      <div
        className={cn(
          `w-[10px] h-[10px] ring-[1.5px] ring-offset-[3px] ring-[#616161] bg-[#616161] rounded-full cursor-pointer`,
          isSelected && "ring-[#9747FF] bg-[#9747FF]",
          className
        )}
        onClick={() => onClick}
      ></div>
      <p className="text-[14px] text-white leading-5">{text}</p>
    </div>
  )
}

export default CheckBox
