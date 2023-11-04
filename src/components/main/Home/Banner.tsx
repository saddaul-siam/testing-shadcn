"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FIphone-15-Pro-Max-Web-Slider-2722.jpg&w=1080&q=75",
  "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FPixel-8-%26-8-Pro-Slider-(1)-4701.jpg&w=1080&q=75",
  "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FApple-Watch-Series-9-Web-Slider-9874.jpg&w=1080&q=75",
  "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FMix-Fold-3-Slider-1262.jpg&w=1080&q=75",
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <header className="container relative -z-[1] my-5 flex h-[500px] w-full gap-5">
      <div className="relative w-3/4 border">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentImageIndex ? "block" : "hidden"
            } relative h-full w-full sm:flex-shrink-0`}
          >
            <Image
              key={index}
              fill
              src={image}
              alt={`Slide ${index}`}
              className="rounded object-cover"
            />
          </div>
        ))}
        <Button
          size="icon"
          variant="secondary"
          rounded="full"
          onClick={goToPreviousSlide}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 transform"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          rounded="full"
          onClick={goToNextSlide}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 transform "
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex h-[500px] w-1/4 flex-col gap-y-5">
        <div className="relative h-full w-full flex-1 border">
          <Image
            fill
            src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FAsus-Rog-Ally-5795.jpg&w=640&q=75"
            alt=""
          />
        </div>
        <div className="relative h-full w-full flex-1 border">
          <Image
            fill
            src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FMi-Band-8-Pro-5523.jpg&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
