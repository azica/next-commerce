"use client"
import { Button, Card, CardBody, Typography } from "@material-tailwind/react"
import React from "react"

import SocialLinks from "./SocialLinks"

const ProductCard = ({
  title,
  price,
  category,
  description,
  id,
  images,
  className,
}: Model.Product & { className?: string }) => {
  const addToCartHandle = (id: number) => {

    const cartList: ({ quantity: number } & Model.Product)[] = JSON.parse(localStorage.getItem("cartList") || "[]")
    const existingProductIndex = cartList.findIndex((el) => el.id === id)

    if (existingProductIndex !== -1) {
      cartList[existingProductIndex].quantity += 1
    } else {
      cartList.push({ title, price, images, description, category, id, quantity: 1 })
    }

    localStorage.setItem("cartList", JSON.stringify(cartList))
  }

  return (
    <Card className={`group/item hover:bg-gray-100 transition-all duration-300 w-full cursor-pointer ${className}`}>
      <div className="relative">
        {images.length > 0 ? <img src={images[0].replace(/^["\\[]|["\\]$/g, "").replace(/^"/, "")} alt={title} /> : null}
        <div className="transition-all duration-300 invisible flex flex-col gap-5 text-black absolute top-4 right-3 group-hover/item:visible">
          <SocialLinks />
        </div>
        <div className="transition-all duration-300 absolute bottom-3 left-4 right-4 invisible group-hover/item:visible text-center">
          <Button variant="filled" color="white" onClick={() => addToCartHandle(id)}>
            add to cart
          </Button>
        </div>
      </div>
      <CardBody>
        <Typography as="a" variant="h6" className="mb-2 font-semibold text-black text-base" href={`/shop/${id}`}>
          {title}
        </Typography>
        <Typography variant="h6" className="mb-2 font-normal text-black">
          {category.name}
        </Typography>
        <Typography className="text-purple">{price} $</Typography>
      </CardBody>
    </Card>
  )
}

export default ProductCard
