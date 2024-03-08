"use client"
import Slider from "react-slick";

const ImageSlider = ({ images }: { images: string[] }) => {

    const settings = {
        customPaging: function (i: number) {
            return (
                <img src={images[i].replace(/^["\\[]|["\\]$/g, "").replace(/^"/, "")} alt={`Slide ${i}`} />
            );
        },
        dots: true,
        dotsClass: "slickButtons",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    images.map((image, idx) => (<div key={idx} className="relative h-[350px]">
                        <img src={image.replace(/^["\\[]|["\\]$/g, "").replace(/^"/, "")} alt="Product" layout="fill" className="object-cover" />
                    </div>))
                }

            </Slider>
        </div>
    )
}

export default ImageSlider;