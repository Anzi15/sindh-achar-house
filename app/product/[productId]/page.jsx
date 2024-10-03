/* eslint-disable react/no-unescaped-entities */

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/firbaseConfig";
import ProductImgsCarousel from "@/app/components/ProductImgsCarousel";
import ProductPageUi from "@/app/components/ProductPageUi";
import HtmlRenderer from "@/app/components/HtmlRenderer";
import Image from "next/image";
import CustomerBenefits from "@/app/components/CustomerBenefits";
import TestimonialSlider from "@/app/components/testimonials-slider";
import ProductSuggestions from "@/app/components/ProductSuggestions";

export async function generateMetadata({params}) {
  const productDoc = await getDoc(doc(db, "Products", params.productId));
  const productData = {...productDoc.data(), id:productDoc.id}

  const title = `${productData.title} | Best Selling Fragrance `;
  const description= productData.description

  return {
    title,
    description,
  };
}

export default async function ProductsPage({params}) {
    const productDoc = await getDoc(doc(db, "Products", params.productId));
    const productData = {...productDoc.data(), id:productDoc.id}

  return (
    <>
    <main className="flex justify-evenly w-full md:flex-row flex-col relative h-full">
        <ProductImgsCarousel
          className=" md:max-h-[565px] md:max-w-[445px] md:gap-8"
          parsedProductImages={JSON.stringify([
            productData.primaryImg,
            productData.secondary1Img,
            productData.secondary2Img,
          ])}
          parsedThumbnails={JSON.stringify([
            productData.primaryImgThumbnails[0].url,
            productData.secondary1ImgThumbnails[0].url,
            productData.secondary2ImgThumbnails[0].url,
          ])}
        />
          <ProductPageUi parsedProduct={JSON.stringify(productData)}/>

          
      </main>

      <div className="description px-8 md:py-[8rem] py-[5rem]">
        <h3 className="text-left">
          <b>Description</b>
        </h3>
        {<HtmlRenderer rawHtml={productData.descriptionHtml} />}
      </div>

      <div className="bg-black w-full  overflow-hidden object-center flex items-center relative justify-center aspect-video flex-col p-8 gap-4 md:min-h-fit min-h-[20rem]">
        <Image
          className="opacity-50 w-full object-cover h-full absolute inset-0 z-[1]"
          src={"https://alzehrabygm.store/assets/jessica-weiller-So4eFi-d1nc-unsplash-CyDVDiZn.webp"}
          alt="Perfume bottle"
          width={2144}
          height={1072}
        />
        <h1 className="z-[2] md:text-5xl text-3xl text-white font-bold font-serif">
          It's All About Luxury
        </h1>
        <p className="z-[1] text-gray-100 md:w-[35%]">
          Discover a world of enchanting fragrances that will elevate your
          personality to new heights of beauty and charm.
        </p>
      </div>

      <div className="flex justify-center md:flex-row flex-col-reverse my-12">
        <div className="md:w-1/2 w-full flex flex-col md:items-end p-10 gap-8 justify-center">
          <h1 className=" md:text-4xl text-left text-3xl font-bold  text-brandRed md:w-[80%]">
            Fragrance with a Purpose
          </h1>
          <p className="text-left md:w-[80%]">
            Experience the harmony of elegance and practicality with our curated
            selection of signature perfumes. Each scent is crafted to offer a
            unique sensory journey while complementing your personal style and
            enhancing your daily presence.
          </p>
        </div>
        <div className="md:w-1/2 w-screen flex justify-center items-center">
          <Image
            src={"https://alzehrabygm.store/assets/olena-bohovyk-KPkR3e6BZG0-unsplash-CbxXOYOt.webp"}
            className="md:w-[80%] w-[90%] rounded-lg"
            alt="Perfume pakistan"
            width={640}
            height={640}
          />
        </div>
      </div>

      <CustomerBenefits />

      <div className="flex w-[98%] justify-center py-9 flex-wrap md:px-4">
        <Image
          src={"https://alzehrabygm.store/assets/lavender-bottle-DISiSQQi.webp"}
          className="md:w-1/2 object-cover rounded-lg w-[90%] aspect-video"
          width={1280}
          height={828}
          alt="Lavender fragrance pakistan | best perfumes"
        />
        <div className="md:w-1/2 w-full flex flex-col md:items-end p-10 gap-8 justify-center">
          <h1 className=" md:text-4xl text-left text-3xl font-bold  text-brandRed md:w-[80%] w-full">
            Elevate Your Senses with Exquisite Fragrances
          </h1>
          <p className="text-left md:w-[80%]">
            Transform your daily routine into a luxurious experience with our
            premium collection of perfumes. Crafted with the finest ingredients,
            each scent embodies elegance and sophistication, making it the
            perfect companion for any occasion.
          </p>
        </div>
      </div>

      <div className="flex w-[98%] justify-center py-9 flex-wrap">
        <div className="md:w-1/2 w-full flex flex-col md:items-end p-10 gap-8 justify-center md:px-4">
          <h1 className=" md:text-4xl text-left text-3xl font-bold  text-brandRed md:w-[80%] w-full">
            Discover Your Signature Scent
          </h1>
          <p className="text-left md:w-[80%]">
            Discover the art of self-expression with our captivating range of
            fragrances. Whether you prefer the allure of a floral bouquet or the
            depth of a woody aroma, our perfumes are designed to leave a lasting
            impression, effortlessly enhancing your presence.
          </p>
        </div>
        <Image
        width={1280}
        height={828}
          src={"https://alzehrabygm.store/assets/scent-of-roses-CsCj_EyW.webp"}
          className="md:w-1/2 object-cover rounded-lg w-[90%] aspect-video"
          alt="rose bottle perfumes "
        />
      </div>

      <TestimonialSlider bgColor="blue-500" textColor="black" />

        <ProductSuggestions
          heading="You might also like:"
          dontUse={productData.title}
        />
    </>
  );
}
