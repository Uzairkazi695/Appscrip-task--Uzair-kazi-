"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "@/app/ui/product-container.module.css";
interface Product {
  id: number;
  title: string;
  img: string;
}

export default function ProductContainer() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data to check if it’s coming through
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h2>New Products</h2>
      <div className={styles.productsContainer}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
