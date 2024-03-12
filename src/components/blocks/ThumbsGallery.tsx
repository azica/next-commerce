"use client"

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ThumbsGallery = ({ images }: { images: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="slider-container">
            <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}>
                {
                    images.map((image, idx) => (<SwiperSlide key={idx} className="relative h-[450px]">
                        <img src={image.replace(/^["\\[]|["\\]$/g, "").replace(/^"/, "")} alt="Product" layout="fill" className="object-cover" />
                    </SwiperSlide>))
                }
            </Swiper>
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="swiperThumbs"
            >
                {
                    images.map((image, idx) => (<SwiperSlide key={idx}>
                        <img src={image.replace(/^["\\[]|["\\]$/g, "").replace(/^"/, "")} alt="Product" layout="fill" className="object-cover cursor-pointer" />
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default ThumbsGallery;