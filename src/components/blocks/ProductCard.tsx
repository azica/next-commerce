"use client"
import { Button, Card, CardBody, Typography } from "@material-tailwind/react"
import Image from "next/image"
import { toast } from "react-toastify"

import SocialLinks from "./SocialLinks"

const ProductCard = ({
  title,
  price,
  category,
  description,
  id,
  thumbnail,
  className,
  discountPercentage,
}: Model.Product & { className?: string }) => {
  const addToCartHandle = (id: number) => {

    const cartList: ({ quantity: number } & Model.Product)[] = JSON.parse(localStorage.getItem("cartList") || "[]")
    const existingProductIndex = cartList.findIndex((el) => el.id === id)

    if (existingProductIndex !== -1) {
      cartList[existingProductIndex].quantity += 1
    } else {
      cartList.push({ title, price, thumbnail, description, category, id, quantity: 1 })
    }

    localStorage.setItem("cartList", JSON.stringify(cartList))
    toast.info(`${title} added to cart!`);
  }

  return (
    <Card className={`group/item hover:bg-gray-100 transition-all duration-300 w-full cursor-pointer h-full ${className}`}>
      <div className="relative h-[275px] p-3">
        {thumbnail ? <Image src={thumbnail} alt={title} fill className="object-cover" /> : null}
        <div className="transition-all duration-300 invisible flex flex-col gap-5 text-black absolute top-4 right-3 group-hover/item:visible">
          <SocialLinks />
        </div>
        <div className="transition-all duration-300 absolute bottom-3 left-4 right-4 invisible group-hover/item:visible text-center">
          <Button variant="filled" color="white" onClick={() => addToCartHandle(id)}>
            add to cart
          </Button>
        </div>
      </div>
      <CardBody className="text-left">
        <Typography as="a" variant="h6" className="font-semibold text-black text-base" href={`/shop/${id}`}>
          {title}
        </Typography>
        <Typography variant="h6" className="font-normal text-black capitalize">
          {category}
        </Typography>
        <div className="flex gap-3 items-center">
          {
            discountPercentage ?
              <>
                <h6 className="flex gap-1 text-purple-600 align-center font-semibold">${price - (price * discountPercentage / 100)}</h6>
                <p className="font-normal line-through">${price}</p>
              </>
              : <p className="font-normal">${price}</p>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
