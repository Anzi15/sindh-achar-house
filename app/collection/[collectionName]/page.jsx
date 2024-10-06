import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase/firbaseConfig";
import ProductCardGroup from "../../components/ProductCardGroup";

export async function generateMetadata({ params }) {
  const productsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", params.collectionName)
  );
  const docs = await getDocs(productsQuery);
  const products = [];

  docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  const collectionName = params.collectionName.toUpperCase();
  const productCount = products.length;
  const title = productCount > 0
    ? `${collectionName} Perfumes | AL ZEHRA PERFUMES | Best fragrances in pakistan available!`
    : "No such products available";
  const description = `Buy the best ${collectionName} perfumes and attars in pakistan. By AL ZEHRA PERFUMES, the name of quality.`;

  return {
    title,
    description,
  };
}

export default async function ProductsPage({ params }) {
  const productsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", params.collectionName)
  );
  const docs = await getDocs(productsQuery);
  const products = [];

  docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id, key: doc.id });
  });

  return (
    <>
      <div>
        <div className="px-10 pt-10 flex w-full justify-between items-center">
          <h1 className="text-[3rem] text-left uppercase">{params.collectionName}</h1>
        </div>
        <div className="products-list">
          <ProductCardGroup products={products} />
        </div>
      </div>
    </>
  );
}
