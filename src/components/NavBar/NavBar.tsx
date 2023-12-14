"use client"

import { ButtonStart } from "../ButtonStart"
import { Logo } from "../Icons/Icons"

const NavBar = () => {
  return (
    <nav className="flex items-center md:justify-between justify-center pt-12 container">
      <div className="flex items-center space-x-2 ">
        <Logo />
        <p className="text-[#E0C8FF] font-semibold text-[26px]">Pagebot.ai</p>
      </div>
      <div className="md:block hidden">
        <ButtonStart />
      </div>
    </nav>
  )
}

export default NavBar
