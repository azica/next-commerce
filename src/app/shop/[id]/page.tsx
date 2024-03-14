
import { Metadata } from "next/types";
import { Suspense } from "react";

import ProductTab from "@/components/blocks/ProductTab";
import ProductView from "@/components/blocks/ProductView";
import { API_LOCALHOST_URL } from "@/shared/constants";

import Loading from "../loading";

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

  return (
      <Suspense fallback={<Loading />}>
       <>
       <ProductView product={product} />  
        <ProductTab />
       </>
      </Suspense>
  )
}
export default ProductDetail
