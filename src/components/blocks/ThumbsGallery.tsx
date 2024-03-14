"use client"

import Image from "next/image"
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ThumbsGallery = ({ images }: { images?: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    if (!images || images.length < 0) return null

    return (
        <div className="slider-container">
            <Swiper
                className="mySwiper2"
                spaceBetween={15}
                navigation={true}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}>
                {
                    images.map((image, idx) => (<SwiperSlide key={idx} className="relative h-[450px]">
                        <Image src={image} alt="Product" className="object-cover" fill />
                    </SwiperSlide>))
                }
            </Swiper>
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="swiperThumbs"
            >
                {
                    images.map((image, idx) => (<SwiperSlide key={idx} className="relative h-[100px]">
                        <Image src={image} alt="Product" layout="fill" className="object-cover cursor-pointer" />
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default ThumbsGallery;