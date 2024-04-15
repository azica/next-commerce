"use client"
import { Select, Typography, Option } from "@material-tailwind/react"
import { Grid, SettingsHorizontal } from "akar-icons"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { useCreateQueryString } from "@/hooks/useCreateQueryString"
import { sortOptions } from "@/shared/mockdata/mockdata"

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
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 flex items-center gap-3">
        <Grid strokeWidth={1.5} size={25} />
        <SettingsHorizontal strokeWidth={1.5} size={25} />
        <Typography className="font-medium">Showing 1-16 of 72 results</Typography>
      </div>
      <div className="max-w-[300px]">
        <Select variant="static" value={value} onChange={(val) => changeHandle(String(val))}>
          {sortOptions?.map((option) => (
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
