"use client"

import { ButtonStart } from "../ButtonStart"
import { Logo } from "../Icons/Icons"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pt-12 container">
      <div className="flex items-center space-x-2 ">
        <Logo />
        <p className="text-[#E0C8FF] font-semibold text-[26px] ">Pagebot.ai</p>
      </div>

      <ButtonStart />
    </nav>
  )
}

export default NavBar
