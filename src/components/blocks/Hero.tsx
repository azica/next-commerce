"use client"

import { Button, Typography } from "@material-tailwind/react"
import Image from "next/image"

import homeHero from "@/assets/images/homeHero.png"

import Container from "../layout/Container"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Container className="flex h-lvh">
        <div className="w-1/2 my-auto">
          <Typography variant="h2" className="font-normal text-primary mb-5">
            Classic Exclusive
          </Typography>
          <Typography variant="h1" className="mb-3">
            Women&apos;s Collection
          </Typography>
          <Typography variant="h3" className="uppercase font-normal mb-3">
            upTo 40% off
          </Typography>
          <a href="/shop">
            <Button variant="filled" color="purple">
              Shop Now
            </Button>
          </a>
        </div>
        <div className="flex border-white border-[15px] w-[400px] h-[500px] m-auto skew-y-6">
          <Image src={homeHero} alt="hero" className="w-[450px] my-auto h-full object-cover" />
        </div>
      </Container>
    </div>
  )
}

export default Hero
