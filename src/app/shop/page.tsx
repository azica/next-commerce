import ProductList from "@/components/blocks/ProductList"
import { Suspense } from "react"

import Filters from "@/components/blocks/Filters"
import Pagination from "@/components/blocks/Pagination"
import Sort from "@/components/blocks/Sort"
import Loading from "./loading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop | Next App",
};

const Shop = () => {

  return (
    <>
      <div className="">
        <Filters />
      </div>
      <div className="flex-1 mt-4 pt-1">
        <Sort />
        <div className="mt-8">
          <Suspense fallback={<Loading />}><ProductList /></Suspense>
          <Pagination />
        </div>
      </div>
    </>
  )
}
export default Shop
