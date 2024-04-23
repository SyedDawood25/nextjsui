import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navbar/NavBar";
import { DiscountProducts } from "@/components/products/DiscountProducts";
import { Products } from "@/components/products/Products";
import { Title } from "@/components/title/Title";
import React from "react";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Title />
      <Products />
      <DiscountProducts />
      <Footer />
    </main>
  );
};

export default Home;
