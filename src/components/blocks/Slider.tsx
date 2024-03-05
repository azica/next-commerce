"use client"

import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"

import { useAllProducts } from "@/apollo/products"

import ProductCard from "./ProductCard"
import Container from "../layout/Container"

const Slider = () => {
  const [products, setProducts] = useState<Model.Product[]>([])

  const { loading, error, data } = useAllProducts({
    limit: 8,
    offset: 1,
  })

  useEffect(() => {
    if (data) {
      setProducts(data.products)
    }
  }, [data])
  // console.log(data);

  return (
    <Container className="py-10">
      <div>
        <Typography variant="h4" className="mb-3 font-medium">
          Shop by Categories
        </Typography>
      </div>
      <div className="grid gap-4 grid-cols-4">
        {products.map((item, idx) => (
          <div key={idx} className="w-full">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, et. Quidem ad debitis, modi animi ipsa pariatur?
        Necessitatibus minus asperiores incidunt expedita quos? A odio explicabo natus quia modi hic esse, perferendis totam
        minus odit vero placeat sed! Dolorem quam minus laboriosam dolor eum illum delectus enim tempora. Fugiat animi
        commodi obcaecati doloribus beatae iusto amet id sed. Molestiae labore perferendis rerum, architecto dolore dolor
        aperiam iure eveniet velit distinctio at inventore voluptatem, laborum debitis maiores reiciendis fugit, iste
        corporis?
      </p>
    </Container>
  )
}

export default Slider
