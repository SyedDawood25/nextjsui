import React from "react";
import Product1 from "../../assets/images/product7.jpeg";
import Product2 from "../../assets/images/product2.jpeg";
import Product3 from "../../assets/images/product5.jpeg";
import Image from "next/image";

export const DiscountProducts = () => {
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
  ];

  return (
    <div className="mx-12 mt-16">
      <div className="text-4xl font-bold mb-8">Heading</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-8">
        {products.map((product) => {
          return (
            <div
              key={product.productNo}
              className={`${product.productNo === 1 ? "row-span-2" : ""}`}
            >
              <div>
                <Image
                  src={product.image}
                  alt="Product"
                  className={`${
                    product.productNo === 1
                      ? "h-[756px] rounded-xl"
                      : "h-[300px] rounded-xl"
                  }`}
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
