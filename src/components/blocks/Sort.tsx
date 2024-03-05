"use client"

import { Select, Typography, Option } from "@material-tailwind/react"
import { Grid, SettingsHorizontal } from "akar-icons"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { useCreateQueryString } from "@/hooks/useCreateQueryString"

const filter = [
  { value: "latest", label: "Sort by latest" },
  { value: "newest", label: "Sort by newest" },
  { value: "a-b", label: "Sort by A - B" },
  { value: "b-a", label: "Sort by B - A" },
]

const Sort = () => {
  const [value, setValue] = useState<string>("latest")
  const pathname = usePathname()
  const router = useRouter()

  const { createQueryString, separator } = useCreateQueryString()

  const changeHandle = (val: string) => {
    setValue(val)

    router.push(`${pathname}${separator}${createQueryString("sort", val)}`)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 flex items-center gap-3">
        <Grid strokeWidth={1.5} size={25} />
        <SettingsHorizontal strokeWidth={1.5} size={25} />
        <Typography className="font-medium">Showing 1-16 of 72 results</Typography>
      </div>
      <div>
        <Select variant="static" value={value} onChange={(val) => changeHandle(String(val))}>
          {filter?.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  )
}

export default Sort
