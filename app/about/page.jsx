import React from "react";
import Image from "next/image";
import CustomerBenefits from "../components/CustomerBenefits";
import TestimonialSlider from "../components/testimonials-slider";
import FaqsSection from "../components/FaqsSection";

const page = () => {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-left">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Crafting Elegance with Every Scent
            </h2>

            <p>
              Our passion for fragrance drives us to innovate and excel,
              ensuring that each scent not only meets but exceeds your
              expectations. Experience the allure of Al Zehra By GM – where
              luxury and tradition come together to create unforgettable
              impressions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 select-none">
            <Image
              className="w-full skeleton-loading rounded-lg min-h-[17rem]"
              src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Faman-chaturvedi-DoXaiQ__JEI-unsplash.jpg?alt=media&token=5a9cba1e-1c40-4f16-9089-e766307b3b0f"
              alt="luxury perfume bottle "
              width={640}
              height={854}
            />

            <Image
              className="mt-4 w-full min-h-[17rem] skeleton-loading lg:mt-10 rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Fevelina-photography-U60Es553C6o-unsplash.jpg?alt=media&token=b2a2e229-da2a-4365-a0b6-f340cd496cf7"
              alt="best perfumes in pakistan"
              width={640}
              height={854}
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 p-5 px-10 flex justify-center my-10">
        <div className="md:w-[40%] w-full flex flex-col py-4 gap-6">
          <h2 className="text-3xl font-bold uppercase text-brandOrange">
            How are our perfumes crafted?
          </h2>

          <p className="text-lg font-nomal">
            At Al Zehra, crafting our perfumes is a meticulous process that
            blends artistry, tradition, and innovation. Here’s an inside look at
            how we create our exquisite fragrances
          </p>
        </div>
      </section>

      <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-6">
        <div className="md:w-1/2 w-[95%] text-center">
          <h2 className="text-2xl font-bold uppercase text-brandOrange py-2">
            Sourcing Premium Ingredients
          </h2>
          <p className="text-lg font-nomal">
            We select the finest raw materials around the world.
          </p>
        </div>

        <div className="md:w-1/2 w-[95%] text-center ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Fpexels-pixabay-67857.jpg?alt=media&token=3c4193f5-a49a-4e27-975b-19cab747c93b"
            alt="Premium Perfume Ingredients"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
        </div>
      </section>

      <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col-reverse flex-wrap md:gap-0 gap-6 md:pl-6">
        <div className="md:w-1/2 w-[95%] text-center ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Fkatherine-hanlon-mod2s3-qFOc-unsplash.jpg?alt=media&token=b2f36792-3b82-45cf-8f70-381da02ba0c0"
            alt="Artisan Perfume Blending"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-[95%] text-center">
          <h2 className="text-2xl font-bold uppercase text-brandOrange py-2">
            {" "}
            Artisan Blending
          </h2>
          <p className="text-lg font-normal">
            Our perfumers blend these ingredients.
          </p>
        </div>
      </section>

      <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-6">
        <div className="md:w-1/2 w-[95%] text-center">
          <h2 className="text-2xl font-bold uppercase text-brandOrange py-2 text-center ">
            {" "}
            Precision Formulation{" "}
          </h2>
          <p className="text-lg font-nomal">
            Our formulations are prepared in controlled a environment.
          </p>
        </div>
        <div className="md:w-1/2 w-[95%] text-center ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Ffulvio-ciccolo-AcLWzh95u-Q-unsplash.jpg?alt=media&token=f0783a02-67b9-4676-918f-90696b966883"
            alt="Perfume Formulation"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
        </div>
      </section>

      <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col-reverse flex-wrap md:gap-0 gap-6 md:pl-6">
        <div className="md:w-1/2 w-[95%] text-center ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Fchristin-hume-0MoF-Fe0w0A-unsplash.jpg?alt=media&token=4d45e9e5-608e-426b-9f4a-4e07cd284c4f"
            alt=" ssurance"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-[95%] text-center">
          <h2 className="text-2xl font-bold uppercase text-brandOrange py-2">
            Quality Assurance
          </h2>
          <p className="text-lg font-normal">
            Every bottle undergoes rigorous quality control checks.
          </p>
        </div>
      </section>

      <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-6">
        <div className="md:w-1/2 w-[95%] text-center">
          <h2 className="text-2xl font-bold uppercase text-brandOrange py-2">
            {" "}
            Elegant Packaging
          </h2>
          <p className="text-lg font-nomal">
            Our packaging reflects the luxury.
          </p>
        </div>
        <div className="md:w-1/2 w-[95%] text-center ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/images%2Fmildlee-7KKy7-TeeVs-unsplash.jpg?alt=media&token=05d9d72f-5aeb-40b4-a6aa-66151b99c366"
            alt="Elegant Perfume Packaging"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
        </div>
      </section>

      <CustomerBenefits />
      <TestimonialSlider bgColor="#575761" />
      <FaqsSection />
    </main>
  );
};

export default page;
