import React from "react";
import TitleImage from "../../assets/images/titleImage.jpg";
import Image from "next/image";
import { Button } from "../ui/button";

export const Title = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-12 absolute bg-black rounded-xl">
        <Image
          src={TitleImage}
          alt="TitleImage"
          className="h-[400px] sm:h-[597px] rounded-xl opacity-70"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col gap-y-8 h-[400px] sm:h-[597px] justify-center items-center relative">
        <div className="text-4xl sm:text-6xl font-bold text-center text-white">
          Shop title
        </div>
        <div className="text-lg sm:text-xl px-20 text-center text-white">
          Subheading with description of your shopping site
        </div>
        <div>
          <Button className="p-5 text-[16px]">Button</Button>
        </div>
      </div>
    </div>
  );
};
