import React from "react";
import Product1 from "../../assets/images/product1.jpeg";
import Product2 from "../../assets/images/product2.jpeg";
import Product3 from "../../assets/images/product3.jpeg";
import Product4 from "../../assets/images/product4.jpeg";
import Product5 from "../../assets/images/product5.jpeg";
import Product6 from "../../assets/images/product6.jpeg";
import Image from "next/image";

export const Products = () => {
  const products = [
    {
      productNo: 1,
      image: Product1,
      title: "Product",
      description: "Description of first product",
      price: "$10.99",
    },
    {
      productNo: 2,
      image: Product2,
      title: "Product",
      description: "Description of second product",
      price: "$10.99",
    },
    {
      productNo: 3,
      image: Product3,
      title: "Product",
      description: "Description of third product",
      price: "$10.99",
    },
    {
      productNo: 4,
      image: Product4,
      title: "Product",
      description: "Description of fourth product",
      price: "$10.99",
    },
    {
      productNo: 5,
      image: Product5,
      title: "Product",
      description: "Description of fifth product",
      price: "$10.99",
    },
    {
      productNo: 6,
      image: Product6,
      title: "Product",
      description: "Description of sixth product",
      price: "$10.99",
    },
  ];

  return (
    <div className="mx-12 mt-16">
      <div className="text-4xl font-bold mb-8">Heading</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-8">
        {products.map((product) => {
          return (
            <div key={product.productNo}>
              <div>
                <Image
                  src={product.image}
                  alt="Product"
                  className="h-[240px] lg:h-[300px] rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="text-[18px] font-medium mt-6">
                {product.title}
              </div>
              <div className="text-[18px] font-medium mt-2 text-[#828282]">
                {product.description}
              </div>
              <div className="text-[18px] font-bold mt-2">{product.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
