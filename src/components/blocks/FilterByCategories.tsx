"use client"
import type { ChangeEvent } from "react"

import { List, ListItem, ListItemPrefix, Checkbox, Typography } from "@material-tailwind/react"
import { usePathname, useRouter } from "next/navigation"

import { useCategories } from "@/apollo/categories"

import { useCreateQueryString } from "../../hooks/useCreateQueryString"

const FilterByCategories = () => {
  const { data } = useCategories()
  const router = useRouter()
  const pathname = usePathname()
  const { createQueryString, separator } = useCreateQueryString()

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    router.push(`${pathname}${separator}${createQueryString("categoryId", e.target.value)}`)
  }

  return (
    <List className="p-0">
      {data?.categories?.map((el: Model.Category) => (
        <ListItem className="p-0" key={el.id}>
          <label htmlFor={String(el.id)} className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox
                value={el.id}
                id={String(el.id)}
                ripple={false}
                onChange={changeHandle}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography className="font-medium">{el.name}</Typography>
          </label>
        </ListItem>
      ))}
    </List>
  )
}

export default FilterByCategories
