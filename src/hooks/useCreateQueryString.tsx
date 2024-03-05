"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useCreateQueryString = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const separator = pathname.includes("?") ? "&" : "?"

  const createQueryString = useCallback(
    (queryName: string, queryValue: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(queryName, queryValue)

      if (queryName === "categoryId") {
        params.set("page", "1")
        params.set("price_min", "0")
      }

      return params.toString()
    },
    [searchParams],
  )

  return { createQueryString, separator }
}
