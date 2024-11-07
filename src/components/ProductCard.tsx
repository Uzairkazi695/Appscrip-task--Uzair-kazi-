import Link from "next/link";
import styles from "@/app/ui/product-card.module.css";
export default function ProductCard({product}: {product: any}) {
  const { id } = product;

  return (
    <div className={styles.productCard}>
      <Link href={`/products/${id}`}>
        <div className={styles.imageContainer}>
          <img src={product.image} className={styles.productImage} alt={product.title} />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}>{product.title}</div>
        </div>
      </Link>
    </div>
  );
}
