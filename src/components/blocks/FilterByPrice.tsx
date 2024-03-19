"use client"
import type { ChangeEvent } from "react"

import { Slider, Typography } from "@material-tailwind/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { useCreateQueryString } from "@/hooks/useCreateQueryString"
import { useDebounce } from "@/hooks/useDebounce"

const FilterByPrice = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [value, setValue] = useState(searchParams.get("price") || "")

  const { createQueryString, separator } = useCreateQueryString()

  const debouncedPushQuery = useDebounce((newValue) => {
    router.push(`${pathname}${separator}${createQueryString("price", newValue)}`);
  }, 500);

  useEffect(() => {
    if (Number(value) <= 0) {
      const updatedParams = new URLSearchParams(searchParams.toString());
      updatedParams.delete("price");
      const updatedQueryString = updatedParams.toString();
      const updatedUrl = updatedQueryString ? `${pathname}${separator}${updatedQueryString}` : pathname;

      router.push(updatedUrl);
    } else {
      debouncedPushQuery(value)
    }

  }, [value, searchParams])


  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Math.floor(Number(e.target.value))
    setValue(String(price))
  }
  
  return (
    <div className="my-10">
      <div className="flex gap-2 mb-5 text-black">
        <Typography>Price:</Typography>
        <Typography>$ {value}</Typography>
      </div>
      <Slider defaultValue={value} onChange={changeHandle} />
    </div>
  )
}

export default FilterByPrice
