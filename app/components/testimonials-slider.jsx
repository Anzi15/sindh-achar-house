"use client"
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function TestimonialSlider({ testimonials = [
  {
    quote:
      "The taste of Gm foods achar is so delicious and perfect for our taste buds, quality is also remarkable so being a dietitian i am recommended.",
    name: "Dr Maryam Jamil",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Al Zehra By GM offers an amazing variety of perfumes that last all day. Their customer service was top-notch, helping me find the perfect scent.",
    name: "Ahmed Ali",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      "I've tried many perfumes, but the ones from Al Zehra By GM truly stand out. The scents are unique and sophisticated, perfect for any occasion.",
    name: "Hassan Sheikh",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      "From the moment I opened the package, I knew this was something special. Al Zehra By GM delivers quality, and their fragrances are simply irresistible.",
    name: "Fatima Malik",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "The craftsmanship behind these perfumes is impressive. Al Zehra By GM has become my go-to for luxury scents that last all day.",
    name: "Sana Javed",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Every perfume I’ve bought from Al Zehra By GM has exceeded my expectations. Their attention to detail and high-quality ingredients make a huge difference.",
    name: "Zain Raza",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote:
      "I never leave the house without wearing a fragrance from Al Zehra By GM. These perfumes are a perfect blend of sophistication and longevity.",
    name: "Sara Ahmed",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
]
}) {
  return (
    <>
      <section className="w-full max-w-[98vw] py-4 cursor-grab ">
        <div className="mx-auto lg:max-w-6xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col px-4 py-5 sm:p-6">
                    <q className="flex-1 text-gray-600 dark:text-gray-300">
                      {testimonial.quote}
                    </q>
                    <div className="mt-6 flex gap-3">
                      <span className="inline-flex rounded-full">
                        <Image
                          className="h-10 w-10 rounded-full"
                          height={40}
                          width={40}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>
        </div>
      </section>
    </>
  );
}
