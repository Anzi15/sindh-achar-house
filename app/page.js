import { collection, getDocs, limit, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { db } from "./lib/firebase/firbaseConfig";
import ProductCardGroup from "./components/ProductCardGroup";
import CollectionCardGroup from "./components/CollectionCardGroup";
import CustomerBenefits from "./components/CustomerBenefits";
import TestimonialSlider from "./components/testimonials-slider";

export async function generateMetadata() {
  const title = `Quality Fragrances in Pakistan | Al Zehra Perfumes`;

  return {
    title,
    description:
      "Looking for the best perfumes in Pakistan? Check out our top picks and reviews to find the perfect scent that suits your style and personality!",
  };
}

export default async function Home() {
  const topProducts = [];
  const bestSeller = [];
  const newArrival = [];
  const scentfulSavings = [];

  const testimonials = [
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
  ];

  const topProductsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "top-products"),
    limit(4) // Apply the `where` clause within `query`
  );
  const topProductsDocs = await getDocs(topProductsQuery);
  topProductsDocs.forEach((document) => {
    topProducts.push({ ...document.data(), id: document.id });
  });

  const bestSellerQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "best-seller"),
    limit(4) // Apply the `where` clause within `query`
  );
  const bestSellerDocs = await getDocs(bestSellerQuery);
  bestSellerDocs.forEach((document) => {
    bestSeller.push({ ...document.data(), id: document.id });
  });

  const newArrivalQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "new-arrival"),
    limit(4) // Apply the `where` clause within `query`
  );
  const newArrivalDocs = await getDocs(newArrivalQuery);
  newArrivalDocs.forEach((document) => {
    newArrival.push({ ...document.data(), id: document.id });
  });

  const scentfulSavingsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "scentful-savings"),
    limit(4) // Apply the `where` clause within `query`
  );
  const scentfulSavingsDocs = await getDocs(scentfulSavingsQuery);
  scentfulSavingsDocs.forEach((document) => {
    scentfulSavings.push({ ...document.data(), id: document.id });
  });

  return (
    <main>
      <div className="w-screen flex items-center justify-center">
            <Image
              src="/cover.png"
              alt="Website Cover"
              className="aspect-video w-full skeleton-loading"
              layout="responsive"
              width={1280}
              height={720}
              priority
            />
      </div>

      <ProductCardGroup
        products={topProducts}
        groupHeading={"Top Products"}
        link={"/products"}
      />
      <CollectionCardGroup
        collectionsArray={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2FMen.png?alt=media&token=90b2211e-911e-4380-86b8-f385ea8d83e6",
            name: "men",
            slug: "men",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwomen.png?alt=media&token=81a8552b-e4c4-4dc2-ab74-025dc5dd79a3",
            name: "women",
            slug: "women",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Feastern.png?alt=media&token=5d04aef8-eec9-47c9-a1dc-1b6a5b207f29",
            name: "eastern",
            slug: "eastern",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwestern.png?alt=media&token=a32f510e-56be-492a-9eb1-096307b3ac29",
            name: "western",
            slug: "western",
          },
        ]}
      />

      <section className="grid md:grid-cols-2 grid-cols-1 gap-8 p-8">
        <Link
          className="hover:scale-105 transition-all"
          href={"/collection/tester"}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2F1.png?alt=media&token=da140821-3e2d-44fe-bf28-bb973014e2c1"
            alt="Al Zehra By  | Perfume Testers | Pakistan"
            height={360}
            width={900}
            className="rounded-lg"
          />
        </Link>
        <Link
          className="hover:scale-105 transition-all"
          href={"/collection/attar"}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2F2.png?alt=media&token=d2b7ca20-05b0-4bdb-953d-d4611e19f30e"
            alt="Al Zehra By GM  | Attar | Pakistan"
            height={360}
            width={900}
            className="rounded-lg"
          />
        </Link>
      </section>

      <ProductCardGroup
        products={scentfulSavings}
        groupHeading={"Scentful Savings"}
        link={"/products"}
      />

      <section className="w-screen md:p-8 p-4 ">
        <div className="bg-black text-white rounded-3xl flex md:flex-row flex-col items-center justify-between gap-5">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fpexels-yuli-sv-58861876-7941434%20(1).jpg?alt=media&token=2afc4a1a-090e-4c30-9747-530edd90e4ce"
            className="md:w-1/2 w-full aspect-square object-cover md:rounded-l-3xl rounded-t-2xl"
            alt="FREE Perfume tester | Image | Al Zehra Perfumes | Pakitan"
            height={960}
            width={640}
          />

          <div className="md:w-1/2 flex flex-col justify-center ">
            <h1 className="uppercase font-black text-white md:text-[60px] text-3xl md:text-left text-center leading-snug   ">
              Can't figure out where to begin?
            </h1>
            <div className="md:w-1/2 pl-4 flex md:justify-start justify-center my-6">
              <Link
                className="bg-brandOrange text-white px-6 py-3 rounded-full hover:bg-red-800 transition-all duration-100 font-bold"
                href="/collection/tester"
              >
                Try Our Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CustomerBenefits />

      <TestimonialSlider testimonials={testimonials} />
    </main>
  );
}
