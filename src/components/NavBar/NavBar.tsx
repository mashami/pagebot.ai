"use client"

import { ButtonStart } from "../ButtonStart"
import { Logo } from "../Logo"

const NavBar = () => {
  return (
    <nav className="flex items-center md:justify-between justify-center pt-12 container">
      <Logo />
      <div className="md:block hidden">
        <ButtonStart />
      </div>
    </nav>
  )
}

export default NavBar
