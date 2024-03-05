"use client"
import type { ChangeEvent } from "react"

import { Typography } from "@material-tailwind/react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { useCreateQueryString } from "@/hooks/useCreateQueryString"

const FilterByPrice = ({ min = 0, max = 1000 }) => {
  const router = useRouter()
  const pathname = usePathname()

  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const { createQueryString, separator } = useCreateQueryString()

  useEffect(() => {
    minValue && router.push(`${pathname}${separator}${createQueryString("price_min", minValue)}`)
  }, [minValue])

  useEffect(() => {
    maxValue && router.push(`${pathname}${separator}${createQueryString("price_max", maxValue)}`)
  }, [maxValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const value = parseInt(e.target.value)
    if (name === "minValue") {
      setMinValue(value)
    } else if (name === "maxValue") {
      setMaxValue(value)
    }
  }

  return (
    <div className="my-10">
      <div className="flex gap-2 mb-5 text-black">
        <Typography>Price:</Typography>
        <Typography>$ {minValue}</Typography>-<Typography>$ {maxValue}</Typography>
      </div>
      <div className="relative h-10 w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleChange}
          name="minValue"
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleChange}
          name="maxValue"
          className="thumb thumb--right"
        />
        <div className="absolute bg-gray-500 w-full z-10 rounded h-1" />
      </div>
    </div>
  )
}

export default FilterByPrice
