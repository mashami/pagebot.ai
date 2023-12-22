"use client"

import { Logo } from "../Logo"

const Footer = () => {
  return (
    <footer className="bg-[#211833] py-5 md:px-[100px] px-8 md:flex block items-center justify-between relative md:space-y-0 space-y-4">
      <Logo />
      <span className="flex md:items-center md:space-x-[15px] space-x-[14px] text-white text-[14px] font-medium leading-6">
        <p className="">Copyright © 2023 Pagebot.</p>
        <p> All rights reserved</p>
      </span>
    </footer>
  )
}

export default Footer
