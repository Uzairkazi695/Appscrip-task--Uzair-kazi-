"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/product-container.module.css";
import { CiHeart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export default function ProductContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const filterCategories = [
    {
      name: "CATEGORY",
      options: ["Electronics", "Men's Clothing", "Women's Clothing"],
    },
    {
      name: "PRICE RANGE",
      options: ["Under $50", "$50-$100", "Over $100"],
    },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    Object.entries(selectedFilters).forEach(([category, values]) => {
      if (values.length > 0) {
        if (category === "PRICE RANGE") {
          filtered = filtered.filter((product) => {
            return values.some((value) => {
              if (value === "Under $50") return product.price < 50;
              if (value === "$50-$100")
                return product.price >= 50 && product.price <= 100;
              if (value === "Over $100") return product.price > 100;
              return false;
            });
          });
        } else if (category === "CATEGORY") {
          filtered = filtered.filter((product) =>
            values.some(
              (value) => product.category.toLowerCase() === value.toLowerCase()
            )
          );
        }
      }
    });

    // Apply sorting
    switch (selectedSort) {
      case "PRICE_LOW":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "PRICE_HIGH":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "NEWEST":
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedFilters, selectedSort, products]);

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[category] || [];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((v) => v !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [category]: newFilters,
      };
    });
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const getSelectedFiltersCount = () => {
    return Object.values(selectedFilters).reduce(
      (acc, curr) => acc + curr.length,
      0
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.itemsCount}>
          {filteredProducts.length} ITEMS
        </span>
        <button
          className={styles.filterToggle}
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          {getSelectedFiltersCount() > 0 && (
            <span className={styles.filterCount}>
              ({getSelectedFiltersCount()})
            </span>
          )}
        </button>
        <select
          className={styles.sortSelect}
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="RECOMMENDED">RECOMMENDED</option>
          <option value="NEWEST">NEWEST</option>
          <option value="PRICE_LOW">PRICE LOW TO HIGH</option>
          <option value="PRICE_HIGH">PRICE HIGH TO LOW</option>
        </select>
      </header>

      <div className={styles.mainContent}>
        <aside
          className={`${styles.filterSidebar} ${
            isFilterVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.filterHeader}>
            <h3>Filters</h3>
            {getSelectedFiltersCount() > 0 && (
              <button onClick={clearFilters} className={styles.clearFilters}>
                Clear All
              </button>
            )}
            <button
              className={styles.closeFilter}
              onClick={() => setIsFilterVisible(false)}
            >
              <IoMdClose size={24} />
            </button>
          </div>

          {filterCategories.map((category) => (
            <div key={category.name} className={styles.filterCategory}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category.name)}
              >
                <span className={styles.categoryName}>{category.name}</span>
                <FaChevronDown
                  size={16}
                  className={`${styles.chevron} ${
                    expandedCategories[category.name] ? styles.expanded : ""
                  }`}
                />
              </div>
              <div
                className={`${styles.categoryOptions} ${
                  expandedCategories[category.name] ? styles.expanded : ""
                }`}
              >
                {category.options.map((option) => (
                  <label key={option} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[category.name]?.includes(option) ||
                        false
                      }
                      onChange={() => toggleFilter(category.name, option)}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxText}>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className={styles.productCard}>
                <button className={styles.favoriteButton}>
                  <CiHeart size={20} />
                </button>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.title}</h3>
                <p className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
