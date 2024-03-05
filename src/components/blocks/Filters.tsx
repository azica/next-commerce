"use client"

import { Card, List } from "@material-tailwind/react"
import { useState } from "react"

import Accordion from "@/components/ui/Accordion"

import FilterByCategories from "./FilterByCategories"
import FilterByPrice from "./FilterByPrice"

const Filters = () => {
  const [open, setOpen] = useState(1)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        <Accordion
          title="Product Categories"
          handleOpen={() => handleOpen(1)}
          open={open === 1}
        >
          <FilterByCategories />
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <Accordion
          title="Filter By Price"
          handleOpen={() => handleOpen(2)}
          open={open === 2}
        >
          <FilterByPrice />
        </Accordion>

        <hr className="my-2 border-blue-gray-50" />
      </List>
    </Card>
  )
}

export default Filters
