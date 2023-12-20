"use client"

import { Logo } from "../Logo"

const Footer = () => {
  return (
    <div className="bg-[#211833] py-5 md:px-[100px] px-8 md:flex block items-center justify-between relative">
      <Logo />
      <div className="flex md:items-center md:space-x-[15px] space-x-2 text-white text-[14px] font-medium leading-6">
        <p className="">Copyright © 2023 Pagebot.</p>
        <p> All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
