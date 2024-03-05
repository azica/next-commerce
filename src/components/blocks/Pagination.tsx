"use client"
import { IconButton } from "@material-tailwind/react"
import { ArrowLeft, ArrowRight } from "akar-icons"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { useCreateQueryString } from "@/hooks/useCreateQueryString"

const Pagination = ({ totalCount = 5 }: { totalCount?: number }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [active, setActive] = useState(1)
  const { createQueryString, separator } = useCreateQueryString()

  const clickHandle = (page: number) => {
    setActive(page)
    router.push(`${pathname}${separator}${createQueryString("page", page)}`)
  }

  const getItems = () => {
    const items = []
    for (let index = 1;index < totalCount + 1;index++) {
      items.push(
        <IconButton
          variant="outlined"
          size="sm"
          key={index}
          className={`font-lg ${active === index ? "bg-purple-500 border-color-purple-500 text-white font-semibold" : "bg-white text-black"}`}
          onClick={() => clickHandle(index)}>
          {index}
        </IconButton>,
      )
    }
    return items
  }

  const next = () => {
    if (active === 5) return
    setActive(active + 1)
  }
  const prev = () => {
    if (active === 1) return
    setActive(active - 1)
  }

  return (
    <div className="flex items-center gap-3 my-10 justify-end">
      <IconButton onClick={prev} disabled={active === 1} className="bg-transparent text-black" size="sm">
        <ArrowLeft strokeWidth={2} size={20} />
      </IconButton>
      {getItems()}
      <IconButton onClick={next} disabled={active === totalCount} className="bg-transparent text-black" size="sm">
        <ArrowRight strokeWidth={2} size={20} />
      </IconButton>
    </div>
  )
}

export default Pagination
