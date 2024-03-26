"use client"

import { IconButton, Typography } from "@material-tailwind/react"
import { ArrowLeft, ArrowRight } from "akar-icons"
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


import { useAllProducts } from "@/services/useProducts"

import ProductCard from "./ProductCard"
import Container from "../layout/Container"

const ShopByCategories = () => {
  const { products } = useAllProducts<Model.Product[]>()

  if (!products || !products.length) {
    return <h2> There are no products</h2>;
  }

  return (
    <Container className="py-16">
      <div className="flex items-center justify-between">
        <Typography variant="h2" className="mb-4 font-medium">
          Shop by Categories
        </Typography>
        <div className="flex gap-2 ml-auto">
          <IconButton color="gray" className="prev">
            <ArrowLeft strokeWidth={1.5} size={20} />
          </IconButton>
          <IconButton color="gray" className="next">
            <ArrowRight strokeWidth={1.5} size={20} />
          </IconButton>
        </div>
      </div>
      <Swiper
        className="myswipe"
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev"
        }}
        modules={[Navigation]}
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx} className="pb-2">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <ProductCard {...item} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default ShopByCategories
