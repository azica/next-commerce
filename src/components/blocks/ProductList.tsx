"use client"

import { Suspense } from "react";

import { useAllProducts } from "@/services/getProducts";

import CardSkeleton from "./CardSkeleton";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useAllProducts<Model.Product[]>();

  if (!products || products.length < 0) {
    return <h2> There are no products</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      <Suspense fallback={<CardSkeleton />}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Suspense>
    </div>
  );
};

export default ProductList;
