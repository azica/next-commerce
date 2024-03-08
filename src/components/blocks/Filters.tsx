"use client"
import FilterByCategories from "./FilterByCategories"
import FilterByPrice from "./FilterByPrice"
import Accordion from "../ui/Accordion"

const Filters = () => {
  return (
    <>
      <Accordion
        title="Filter by Category"
      >
        <FilterByCategories />
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
      <Accordion
        title="Filter by Price"
      >
        <FilterByPrice />
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
    </>
  )
}

export default Filters
