import { Star } from "akar-icons";
import { Metadata } from "next/types";

import ThumbsGallery from "@/components/blocks/ThumbsGallery";
import ColorsList from "@/components/ui/ColorsList";
import SizeList from "@/components/ui/SizeList";
import { API_LOCALHOST_URL } from "@/shared/constants";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `${API_LOCALHOST_URL}/api/products/${id}`,
    {
      next: {
        revalidate: 60
      }
    })
  const data: Model.Product = await response.json()
  return data;
}

export async function generateMetadata({
  params: { id }
}: Props): Promise<Metadata> {
  const { title } = await getData(id);
  return {
    title: title
  }
}

const ProductDetail = async ({ params: { id } }: Props) => {
  const product = await getData(id)

  return <>
    <div className="flex gap-8 my-20 w-full">
      <div className="overflow-hidden relative w-1/2 relative min-h-[400px]">
        <ThumbsGallery images={product.images} />
      </div>
      <div className="w-1/2">
        <h3>Product Detail {product.title}</h3>
        <h4 className="font-normal"> {product.category.name}</h4>
        <div className="flex gap-1 my-2">
          <Star strokeWidth={1.5} size={20} fill="#e64a19" color="#e64a19" className="ease-in duration-200 hover:fill-transparent" />
          <Star strokeWidth={1.5} size={20} fill="#e64a19" color="#e64a19" className="ease-in duration-200 hover:fill-transparent" />
          <Star strokeWidth={1.5} size={20} fill="#e64a19" color="#e64a19" className="ease-in duration-200 hover:fill-transparent" />
          <Star strokeWidth={1.5} size={20} fill="#e64a19" color="#e64a19" className="ease-in duration-200 hover:fill-transparent" />
          <Star strokeWidth={1.5} size={20} fill="#e64a19" color="#e64a19" className="ease-in duration-200 hover:fill-transparent" />
        </div>
        <h4 className="my-4 font-normal">${product.price} </h4>
        <p className="text-sm mb-3">{product.description}</p>
        <h6 className="mb-3">Color</h6>
        <ColorsList colors={["#43a047", "#1e88e5", "#d81b60", "#f4511e"]} />
        <h6 className="mt-5 mb-3">Size</h6>
        <SizeList />
      </div>
    </div>
  </>
}
export default ProductDetail