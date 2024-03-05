import { API_URL } from "@/apollo/contstants";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `${API_URL}/api/v1/products/${id}`,
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
  const product = getData(id);
  console.log(product)
  console.log(id)
  return {
    title: "Shop "
  }
}
const ProductDetail = async ({ params: { id } }: Props) => {
  const product = await getData(id)
  return <Container>
    <div className="flex gap-5">
      <div>
        <img src={product.images[0]} width={250} height={350} alt={product.title} />
      </div>
      <div>
        <h1>Product Detail {product.title}</h1>
        <h1>Category: {product.category.name}</h1>
        <p> {product.description}</p>
      </div>
    </div>
  </Container>
}
export default ProductDetail
