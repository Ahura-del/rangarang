"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import productFilter from "../../public/Data/productFilters.json";
import productData from "../../public/Data/productData.json";

import { Card, CardContent } from "@/components/ui/card";
import { FC, useMemo, useState } from "react";
import Image from "next/image";


const Products:FC = () => {
  const [selectedFilter, setSelectedFIlter] = useState("all");
  const filterdProduct = useMemo(() => {
    const newData = productData.filter((p) =>
      p.category.find((item) => item === selectedFilter)
    );
    return newData;
  }, [selectedFilter]);

  return (
    <section className="py-5 lg:py-5 xl:py-6 2xl:py-8 ">
      <div className="px-2 lg:max-w-4xl xl:max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-sm font-semibold text-red-400 text-right mb-5 md:mb-4">
          سایر محصولات
        </h2>
        <Carousel opts={{ direction: "rtl" }} className="w-full mb-5 lg:hidden">
          <CarouselContent>
            {productFilter.map((p) => (
              <CarouselItem
                key={p.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/3 "
              >
                <Card
                  className="rounded "
                  onClick={() => setSelectedFIlter(p.category)}
                >
                  <CardContent className="flex items-center justify-center p-2 bg-gray-100 rounded ">
                    <span className="text-sm text-nowrap">{p.label}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="lg:flex lg:items-start lg:gap-5">
          <ul className="w-fit space-y-1 hidden lg:inline-block">
            {productFilter.map((p) => (
              <li
                onClick={() => setSelectedFIlter(p.category)}
                key={p.id}
                className={`text-gray-500 text-sm font-medium hover:bg-gray-200 hover:text-gray-900 p-2 rounded cursor-pointer transition-all duration-150 text-nowrap ${
                  p.category === selectedFilter &&
                  
                  "bg-gray-200 text-gray-900"
                }`}
              >
                {p.label}
              </li>
            ))}
          </ul>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            {filterdProduct.map((fData) => (
              <div
                className={`w-full h-40 lg:h-60 rounded overflow-hidden relative ${
                  fData.id === "1" && "col-span-2 lg:order-1"
                } `}
                key={fData.id}
              >
                <Image
                  src={fData.image}
                  alt={fData.id}
                  fill
                  className="object-cover object-center size-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
