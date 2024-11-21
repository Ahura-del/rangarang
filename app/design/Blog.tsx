'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle ,  } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MdChevronLeft } from "react-icons/md";
import blogData from '../assets/Data/blog.json'
import { ChevronLeft } from "lucide-react";
const Blog = () => {
  return (
    <section className="bg-gray-100 py-4">
        <div className="px-2 lg:max-w-4xl xl:max-w-6xl mx-auto overflow-hidden">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-red-400 text-right mb-5 md:mb-4">
          جدیدترین مطالب بلاگ
        </h2>
        <Button variant="link" className="p-0 text-sm">
          ورود به بلاگ
          <MdChevronLeft />
        </Button>
      </div>

      <Carousel
            opts={{ loop: true , direction:'rtl' , align:'start'}}
            className="w-full  max-w-fit "
          >
            <CarouselContent>
              {blogData.map((b) => (
                  <CarouselItem
                  key={b.id}
                  className=" basis-11/12  lg:basis-1/4"
                  >
                 
                   <Card className="rounded min-h-60 h-full group hover:bg-gray-700 transition-all duration-150" >
                  <CardContent className=" aspect-square p-0 ">
                    <CardHeader className="p-0 rounded-t relative">
                        <div className="w-full h-56 bg-red-300 group-hover:bg-gray-400/50 transition-all duration-150 rounded-t"></div>
                        <div className="bg-red-600 absolute -top-1 z-50 left-5 flex flex-col items-center ">
                            <span className="text-white size-full text-2xl mb-5 flex items-center justify-center">
                            {b.day}
                            </span>
                            <span className="inline-block w-full bg-gray-600 text-sm text-gray-50 px-1">
                                {b.month}
                            </span>
                        </div>
                    </CardHeader>
                    <div className="p-6">

                    <CardTitle className="text-lg mb-2 group-hover:text-white transition-all duration-150">{b.title}</CardTitle>
                    <CardDescription className="group-hover:text-gray-200 transition-all duration-150">{b.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
              <CarouselPrevious className="rounded-none !opacity-100 -left-4 z-30"/>
              <CarouselNext className="rounded-none !opacity-100 -right-4 z-30"  />
          </Carousel>
        </div>

    </section>
  );
};

export default Blog;
