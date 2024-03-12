"use client"

import { IconButton, Typography } from "@material-tailwind/react"
import { ArrowLeft } from "akar-icons"
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAllProducts } from "@/services/getProducts"

import ProductCard from "./ProductCard"
import Container from "../layout/Container"

const ShopByCategories = () => {
  const { products, isLoading, error } = useAllProducts<Model.Product[]>()

  return (
    <Container className="py-16">
      <div className="flex items-center justify-between">
        <Typography variant="h2" className="mb-4 font-medium">
          Shop by Categories
        </Typography>
        <IconButton color="gray">
          <ArrowLeft strokeWidth={1.5} size={20} />
        </IconButton>
      </div>
      <Swiper
        className="myswipe"
        spaceBetween={20}
        slidesPerView={4}
      >
        {products?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default ShopByCategories
