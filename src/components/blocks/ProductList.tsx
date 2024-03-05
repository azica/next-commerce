"use client"

import { Spinner, Typography } from "@material-tailwind/react"
import { useSearchParams } from "next/navigation"

import { useAllProducts } from "@/apollo/products"

import ProductCard from "./ProductCard"

const ProductList = () => {
  const searchParams = useSearchParams()
  const currentPage = searchParams.get("page")
  const currentSort = searchParams.get("sort")
  const currentCategory = searchParams.get("categoryId")
  const price_min = searchParams.get("price_min")
  const price_max = searchParams.get("price_max")

  const { loading, error, data } = useAllProducts({
    limit: 6,
    offset: Number(currentPage) * 6,
    categoryId: Number(currentCategory),
    price_min: Number(price_min),
    price_max: Number(price_max),
  })

  if (data?.products?.length < 0 && loading) {
    <Spinner className="h-16 w-16 text-gray-900/50" />
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.products.length === 0 && (
        <Typography variant="h5" className="text-center my-10">
          There is no Items
        </Typography>
      )}
      {data?.products?.map((product: Model.Product) => <ProductCard key={product.id} {...product} />)}
    </div>
  )
}

export default ProductList
