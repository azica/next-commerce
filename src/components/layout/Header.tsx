"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import logo from "@/assets/images/Logo.png"

import Container from "./Container"
import HeaderActions from "./HeaderActions"

const menu = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/our-story", label: " Our Story" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
]
const Header = () => {

  const pathname = usePathname()
  const showHeader = pathname === "/signin"
  if (showHeader) {
    return null
  }

  return (
    <header>
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="inline-block">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="flex justify-center capitalize my-3 flex-grow-1">
          {menu.map((link, index) => (
            <Link href={link.href} key={index} className="headerLink">
              {link.label}
            </Link>
          ))}
        </nav>
        <HeaderActions />
      </Container>
    </header>
  )
}
export default Header
