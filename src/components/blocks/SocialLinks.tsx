import { Tooltip, Typography } from "@material-tailwind/react"
import { Star, ArrowRightLeft, EyeOpen } from "akar-icons"
import React from "react"

const SocialLinks = () => {
  return (
    <>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#twitter"
          className="inline-flex text-black rounded-full bg-white w-8 h-8 items-center justify-center">
          <Star strokeWidth={1.5} size={17} />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#twitter"
          className="inline-flex text-black rounded-full bg-white w-8 h-8 items-center justify-center">
          <ArrowRightLeft strokeWidth={1.5} size={17} />
        </Typography>
      </Tooltip>
      <Typography
        as="a"
        href="#twitter"
        className="inline-flex text-black rounded-full bg-white w-8 h-8 items-center justify-center">
        <EyeOpen strokeWidth={1.5} size={17} />
      </Typography>
    </>
  )
}

export default SocialLinks
