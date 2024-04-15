"use client"
import Image from "next/image"
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ThumbsGallery = ({ images }: { images?: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    if (!images || images.length < 0) return null

    return (
        <div className="slider-container">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper2"
                spaceBetween={15}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
                {
                    images.map((image, idx) => (<SwiperSlide key={idx} className="relative h-[450px]">
                        <Image src={image} alt="Product" className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </SwiperSlide>))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiperThumbs"
            >
                {
                    images.map((image, idx) => (<SwiperSlide key={idx} className="relative h-[100px]">
                        <Image src={image} alt="Product" className="object-cover cursor-pointer" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default ThumbsGallery;