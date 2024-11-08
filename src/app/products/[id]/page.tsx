"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/ui/product-page.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.productImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.productDetails}>
        <h1>{product.title}</h1>
        <p className={styles.productCategory}>{product.category}</p>
        <div className={styles.productRating}>
          <span className={styles.stars}>
            {"★".repeat(Math.round(product.rating.rate))}
          </span>
          <span className={styles.ratingCount}>
            ({product.rating.count} reviews)
          </span>
        </div>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
