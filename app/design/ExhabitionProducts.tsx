"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdChevronLeft } from "react-icons/md";

const ExhabitionProducts = () => {
  return (
    <section className="py-5 px-2 w-full bg-gray-200 overflow-hidden">
      <div className=" lg:max-w-4xl xl:max-w-6xl w-full mx-auto lg:mx-0 lg:mr-auto xl:mx-auto ">
        <div className="w-full flex items-center justify-between mb-2 lg:hidden">
          <h2 className="text-sm font-semibold">محصولات نمایشگاهی و همایش</h2>
          <Button variant="link" className="p-0 text-sm">
            مشاهده همه
            <MdChevronLeft />
          </Button>
        </div>
        <div
          className="w-full lg:flex lg:justify-between lg:items-center lg:gap-4 "
          dir="ltr"
        >
          <Carousel
            opts={{ loop: true }}
            className="w-full lg:w-10/12 max-w-fit "
          >
            <CarouselPrevious className="rounded-none -left-2 z-20" />
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="size-40 basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="p-1 bg-red-300 size-full">
                    <p>test</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="rounded-none -right-2" />
          </Carousel>
          <div className="w-2/12 lg:flex flex-col items-center justify-between gap-3 hidden ">
            <div className="space-y-2">
              <h2 className="text-center font-bold">
                محصولات نمایشگاهی <br />و همایش
              </h2>
              <p className="text-xs text-center font-light">
                ارائه سفارش محصولات نمایشگاهی با استفاده از
                <br /> چاپ دیجیتال
              </p>
            </div>
            <Button
              variant={"outline"}
              className="bg-transparent border border-gray-500"
              style={{ borderRadius: "5px" }}
            >
              مشاهده همه
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhabitionProducts;
