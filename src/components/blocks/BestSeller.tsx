"use client"
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Typography } from "@material-tailwind/react"
import { Grid } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAllProducts } from "@/services/getProducts"

import ProductCard from "./ProductCard"
import Container from "../layout/Container"

const BestSeller = () => {
    const { products } = useAllProducts<Model.Product[]>({ limit: "30" });

    return (
        <Container className="py-16">
            <Typography variant="h2" className="mb-4 font-medium text-center">
                Our BestSeller
            </Typography>
            <div className="h-[1000px] py-5">
                {
                    !products || !products.length ?
                        <h2> There are no products</h2>
                        :
                        <Swiper
                            className="twoRowsSlider"
                            spaceBetween={20}
                            slidesPerView={4}
                            grid={{
                                rows: 2,
                            }}
                            modules={[Grid]}>
                            {products?.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <ProductCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                }
            </div>
        </Container>
    )
}

export default BestSeller
