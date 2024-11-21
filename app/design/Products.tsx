"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productData from "../assets/Data/products.json";
import { Card, CardContent } from "@/components/ui/card";
const Products = () => {
  return (
    <section className="py-5 lg:py-5 xl:py-6 2xl:py-8 ">
        <div className="px-2 lg:max-w-4xl xl:max-w-6xl mx-auto overflow-hidden">

      <h2 className="text-sm font-semibold text-red-400 text-right mb-5 md:mb-4">
        سایر محصولات
      </h2>

      <Carousel opts={{ direction: "rtl" }} className="w-full mb-5 lg:hidden">
        {/* <CarouselPrevious className="rounded-none !opacity-100 -left-3 z-20" /> */}
        <CarouselContent>
          {productData.map((p) => (
            <CarouselItem
              key={p.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/3 "
            >
              <div className="p-1">
                <Card className="rounded" onClick={() => alert(p.label)}>
                  <CardContent className="flex items-center justify-center p-2 bg-gray-100 rounded ">
                    <span className="text-sm text-nowrap">{p.label}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselNext className="rounded-none !opacity-100 bg-white -right-3 z-20" /> */}
      </Carousel>
  <div className="lg:flex lg:items-start lg:gap-5">

        <ul className="w-fit space-y-1 hidden lg:inline-block">
          {productData.map((p) => (
              <li
              key={p.id}
              className="text-gray-500 text-sm font-medium hover:bg-gray-200 hover:text-gray-900 p-2 rounded cursor-pointer transition-all duration-150 text-nowrap"
              >
              {p.label}
            </li>
          ))}
        </ul>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full h-40  bg-red-400 lg:col-span-2"></div>
            <div className="w-full h-40 bg-red-400 "></div>
            <div className="col-span-2 lg:col-span-1 h-40 w-full bg-red-400"></div>
            <div className="w-full h-40 bg-red-400"></div>
            <div className="w-full h-40 bg-red-400"></div>
        </div>
          </div>
        </div>

    </section>
  );
};

export default Products;
