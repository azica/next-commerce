"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import logo from "@/assets/images/Logo.png"

import Container from "./Container"
import HeaderActions from "./HeaderActions"

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
        <nav className="flex gap-4 justify-center capitalize my-3 flex-grow-1">
          <Link className="font-medium text-base" href="/">
            Home
          </Link>
          <Link className="font-medium text-base" href="/shop">
            Shop
          </Link>
          <Link className="font-medium text-base" href="/our-story">
            Our Story
          </Link>
          <Link className="font-medium text-base" href="/blog">
            Blog
          </Link>

          <Link className="font-medium text-base" href="/contact-us">
            Contact Us
          </Link>
          {/* {data ? (
            <Link className="font-medium text-base" href="/profile">
              hi {data.myProfile.name}
            </Link>
          ) : null} */}
        </nav>
        <HeaderActions />
      </Container>
    </header>
  )
}
export default Header
