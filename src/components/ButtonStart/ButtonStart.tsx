"use client"

import { Button } from "../ui/button"
interface ButtonStartProps {
  boxShadow?: string
  backgroundColor?: string
  onClick?: () => void
}
const ButtonStart = ({
  boxShadow = "4px 4px 5px 0px #8F60FF inset",
  backgroundColor = "#5C3BA1",
  onClick
}: ButtonStartProps) => {
  return (
    <Button
      text="Get Started"
      iconPosition="right"
      className="h-0 py-[19px] text-[14px] hover:bg-[#5C3BA1]/75  font-medium leading-5 text-white rounded-[64px] cursor-pointer"
      onClick={onClick}
      icon={
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5863 12.716L14.402 18.216C14.2988 18.3253 14.1301 18.3785 14.0176 18.3785C13.893 18.3785 13.768 18.3355 13.6688 18.2486C13.4572 18.063 13.4415 17.7467 13.6339 17.5426L18.0301 12.8785H6.23914C5.95255 12.8785 5.7207 12.6549 5.7207 12.4066C5.7207 12.1583 5.95261 11.8785 6.23914 11.8785H18.0298L13.6329 7.21283C13.4405 7.00874 13.4562 6.69221 13.6678 6.5069C13.88 6.32233 14.2075 6.33599 14.4006 6.54108L19.585 12.0411C19.7645 12.2316 19.7645 12.5253 19.5863 12.716Z"
            fill="white"
          />
        </svg>
      }
      style={{
        boxShadow: boxShadow,
        background: backgroundColor
      }}
    />
  )
}

export default ButtonStart
