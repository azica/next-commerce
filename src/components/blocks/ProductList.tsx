"use client"

import { motion } from "framer-motion";

import { useAllProducts } from "@/services/useProducts";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useAllProducts<Model.Product[]>();

  if (!products || !products.length) {
    return <h2>There are no products</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-3 w-full container">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: 20, }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
