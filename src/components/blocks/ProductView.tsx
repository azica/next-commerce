
import { Percentage } from "akar-icons"

import Rating from "./Rating"
import ThumbsGallery from "./ThumbsGallery"
import ColorsList from "../ui/ColorsList"
import SizeList from "../ui/SizeList"

const ProductView = ({ product }: { product: Model.Product }) => {
    return (
        <div className="flex gap-8 w-full">
            <div className="overflow-hidden relative w-1/2 relative min-h-[400px]">
                <ThumbsGallery images={product.images as string[]} />
            </div>
            <div className="w-1/2">
                <h3>Product Detail {product.title}</h3>
                <h4 className="font-normal"> {product.category}</h4>
                <Rating stars={Number(product.rating)} />
                <div className="flex gap-3 items-center my-4">
                    {
                        product.discountPercentage ?
                            <>
                                <h5 className="flex gap-1 text-purple-600 align-center font-semibold">${product.price - (product.price * product.discountPercentage / 100)}</h5>
                                <h4 className="font-normal line-through">${product.price}</h4>
                            </>
                            : <h4 className="font-normal">${product.price}</h4>
                    }
                </div>

                <p className="text-sm mb-3">{product.description}</p>
                <h6 className="mb-3">Color</h6>
                <ColorsList colors={["#43a047", "#1e88e5", "#d81b60", "#f4511e"]} />
                <h6 className="mt-5 mb-3">Size</h6>
                <SizeList />
            </div>
        </div>
    )
}

export default ProductView