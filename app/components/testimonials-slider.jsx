"use client"
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import AnimatedDiv from "./AnimatedDiv";

export default function TestimonialSlider({ testimonials = [
  {
    quote:
      "The taste of Gm foods achar is so delicious and perfect for our taste buds, quality is also remarkable so being a dietitian i am recommended.",
    name: "Dr Maryam Jamil",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/Nd8ccpbS/image.png",
  },
  {
    quote:
      "Ma Sha Allah zabardast taste hai ma na order Kiya tha mix achar apnay relative ko check karwaya us na la Liya mujhy sahi sa check bhi nai karnay diya so is Liya ma na again ak aur order Kiya hai",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/0jD3Pt9n/image.png",
  },
  {
    quote:
      "best ND yummy achar chatni.i am In love with it literally itni achi h or Ramzan me to best chiz he ap log bhi gm food seyay chizain order kry without any hasitation",
    name: "Deja",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/bRFxvgsW/image.png",
  },
  {
    quote:
      "GM Foodz is a promising brand offering high-quality and delicious food products. With a focus on freshness, attractive branding, and customer satisfaction, it has great potential to grow. Expanding marketing efforts and product variety can further strengthen its position in the market.",
    name: "Hoorain Al NOOR",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/RG1SmHG6/image.png",
  },
  {
    quote:
      "Best ever Achar I really love it😍flavour 10| 10 quality packing top class i recomend You All to try this best Achar 😍inshaAllah i will Shop again and again Really like it",
    name: "Naimal Yousaf Butt",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/BKTzKxZ1/480324448-614243678140461-3056309638179870596-n.jpg",
  },
  {
    quote:
      "Assalamualaikum mene Inka Mix Achar order Kiya tha. very Good Taste and Safe Parcel And very cheap Prices. Order From GM Foodz😍",
    name: "Muhammad Naeem",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/TBJPYHyM/363344303-2224176651304288-965764869529267900-n.jpg",
  },
  {
    quote:
      "Mashallah One Of The Best Achar. Lehsan Achar, Mix achar, Hari Mirch, kathi Mithi Achar.  Gm Foods Pakistan No.1 achar. 10/10❤️ If You want the Best Achar Try GM Food.",
    name: "Prime Affiliate",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/B5n1wz2t/468301608-122140721096434009-7070898920464045465-n.jpg",
  },
  {
    quote:
      "زبردست ذائقہ! مکس اچار میں ہر سبزی کا بہترین امتزاج اور لہسن اچار بہت مزیدار اور خالص ہے۔ ہر کھانے کے ساتھ لاجواب لگتا ہے۔ جلدی ڈیلیوری اور بہترین پیکنگ بھی! ضرور ٹرائی کریں۔",
    name: "Naeem Shaikh",
    role: "CEO at Company",
    imgSrc: "https://i.ibb.co/b5f3xfKf/453178253-471506465671661-2781666950760530985-n.png",
  },
]
}) {
  return (
    <>
<section className="w-full max-w-[98vw] py-4 cursor-grab">
  <h3 className="text-3xl uppercase m-auto font-semibold max-w-fit text-center">Reviews</h3>
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
            <AnimatedDiv>
              <div className="flex flex-col px-4 py-5 sm:p-6">
                <q className="flex-1 text-gray-600 dark:text-gray-300">
                  {testimonial.quote}
                </q>

                {/* 5 stars */}
                <div className="flex mt-4 gap-1 text-yellow-800">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} fill="currentColor" stroke="currentColor" size={20} />
                  ))}
                </div>

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
            </AnimatedDiv>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</section>
    </>
  );
}
