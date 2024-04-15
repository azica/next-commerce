"use client"
import { IconButton } from "@material-tailwind/react"
import { Cross, ThreeLineHorizontal } from "akar-icons"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"

import logo from "@/assets/images/Logo.png"
import useLockScroll from "@/hooks/useLockBodyScroll"
import { menu } from "@/shared/mockdata/mockdata"

import Container from "./Container"
import HeaderActions from "./HeaderActions"

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLockScroll(isMenuOpen)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showHeader = pathname === "/signin";
  if (showHeader) {
    return null
  }

  return (
    <header ref={headerRef}>
      <Container className="flex items-center justify-between py-3 relative">
        <Link href="/" className="inline-block z-50">
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className={`my-3 top-0 right-0 z-10 left-0 md:relative md:flex ${isMenuOpen ? "fade-in-right fixed bottom-0 bg-white" : "hidden"}`}>
          <nav className="block md:flex justify-center capitalize mt-[100px] md:mt-0">
            {menu.map((link, index) => (
              <Link href={link.href} key={index} className="headerLink cursor-pointer">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <HeaderActions />
        <IconButton
          variant="text"
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? (
            <ThreeLineHorizontal
              strokeWidth={1.5}
              size={25}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <Cross
              strokeWidth={1.5}
              size={25}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </IconButton>
      </Container>
    </header>
  )
}
export default Header
