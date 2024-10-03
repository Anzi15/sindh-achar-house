/* eslint-disable react/no-unescaped-entities */

import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/firbaseConfig";
import ProductCardGroup from "../components/ProductCardGroup";

export async function generateMetadata() {
  const docs = await getDocs(collection(db, "Products"));
  const products = [];
  
  docs.forEach((doc) => {
    products.push({...doc.data(), id:doc.id});
  });

  const productCount = products.length;
  const title = productCount > 0 
    ? `We have ${productCount} product${productCount > 1 ? 's' : ''} available!` 
    : "No products available";

  return {
    title,
    description: "Explore our range of products.",
  };
}

export default async function ProductsPage() {
  const docs = await getDocs(collection(db, "Products"));
  const products = [];

  docs.forEach((doc) => {
    products.push({...doc.data(), id:doc.id});
  });

  return (
    <>
      <div>
      <div className="px-6 flex w-full justify-between items-center">
        <h1 className="text-[3rem] text-left">Products</h1>
        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex items-center gap-2 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <IoIosOptions className="2xl" />
              Options
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <button
                  onClick={() => handleSortChange("title")}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Sort by Title
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => handleSortChange("price")}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Sort by Price
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => handleFilterChange("Perfumes")}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Filter by Perfumes
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => handleFilterChange("Attars")}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Filter by Attars
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => handleFilterChange("")}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Clear Filter
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu> */}
      </div>
      <div className="products-list">
          <ProductCardGroup products={products} />
      </div>
    </div>
    </>
  );
}
