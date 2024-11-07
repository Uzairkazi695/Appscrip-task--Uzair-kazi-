import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductContainer from "@/components/ProductContainer";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductContainer />
      <Footer />
    </>
  );
}
