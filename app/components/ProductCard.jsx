import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({
  link,
  title,
  image1,
  price,
  comparePrice = null,
  loading,
  productData
}) => {
  const hasDiscount =
    comparePrice && !isNaN(comparePrice) ;
  const discountPercentage = hasDiscount
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;



  return (
    <>
    <div
      
      className="group my-4 md:my-10 flex m-[1%] w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-small hover:shadow-md"
    >
      <Link href={link}>
      <div className="flex rounded-xl relative">
        <Image
          className="peer right-0 w-full object-cover aspect-square skeleton-loading object-center"
          src={image1}
          alt={title}
          layout="responsive"
          width={320}
          height={320}
        />

        {hasDiscount && (
          <>
            <span className="absolute top-0 right-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
              SALE
            </span>
          </>
        )}
      </div>
      </Link>
      <div className="mt-4 px-5 pb-5 md:min-h-[12rem]">
        <Link href={link}>
        <h5
          className={`text-xl text-left tracking-tight text-slate-900 ${
            loading && "skeleton-loading"
          }`}
        >
          {title}
        </h5>
        <div className="mt-2 mb-5 md:flex items-center justify-between">
          <p>
            <span
              className={`md:text-2xl font-semibold text-brandOrange ${
                loading && "skeleton-loading"
              }`}
            >
              Rs. {price}
            </span>
          </p>
          {hasDiscount && (
            <span
              className={`ml-2 text-sm text-slate-900 line-through ${
                loading && "skeleton-loading"
              }`}
            >
              Rs. {comparePrice}
            </span>
          )}
        </div>
        </Link>
        <AddToCartBtn productData={productData} />
      </div>
    </div>
    </>
  );
};

export default ProductCard;
