
import { Suspense } from "react";

import Filters from "@/components/blocks/Filters";
import Pagination from "@/components/blocks/Pagination";
import ProductList from "@/components/blocks/ProductList";
import Sort from "@/components/blocks/Sort";
import SideMenu from "@/components/layout/SideMenu";

import Loading from "./loading"

const Shop = async () => {
  return (
    <div className="flex gap-10 min-h-screen w-full mb-10">
      <SideMenu>
        <Filters />
      </SideMenu>
      <div className="mt-4 pt-1 flex flex-col gap-4 justify-between items-center w-full">
        <Sort />
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense >
        <Pagination />
      </div>
    </div>
  )
}
export default Shop