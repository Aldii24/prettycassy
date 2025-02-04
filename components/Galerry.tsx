"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/assets/images/pretty1.jpg",
  "/assets/images/pretty2.jpg",
  "/assets/images/pretty3.jpg",
  "/assets/images/pretty4.jpg",
  "/assets/images/pretty5.jpg",
  "/assets/images/pretty6.jpg",
  "/assets/images/pretty7.jpg",
  "/assets/images/pretty8.jpg",
  "/assets/images/pretty9.jpg",
  "/assets/images/pretty10.jpg",
  "/assets/images/pretty11.jpg",
  "/assets/images/pretty12.jpg",
  "/assets/images/pretty13.jpg",
  "/assets/images/pretty14.jpg",
  "/assets/images/pretty15.jpg",
  "/assets/images/pretty16.jpg",
  "/assets/images/pretty17.jpg",
  "/assets/images/pretty18.jpg",
  "/assets/images/pretty19.jpg",
  "/assets/images/pretty20.jpg",
  "/assets/images/pretty21.jpg",
  "/assets/images/pretty22.jpg",
  "/assets/images/pretty23.jpg",
];

const Galerry = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-[250px] mt-10">
      <Carousel setApi={setApi} className="w-full max-w-[250px]">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={img}
                    width={200}
                    height={200}
                    alt={`Image ${index + 1}`}
                    className="w-[300px] h-[250px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default Galerry;
