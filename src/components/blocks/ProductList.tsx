"use client"
import { useAllProducts } from "@/services/getProducts";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useAllProducts<Model.Product[]>();

  if (!products) {
    <h2> There is not products</h2>
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
