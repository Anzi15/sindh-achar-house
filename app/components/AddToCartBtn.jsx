"use client"

const AddToCartBtn = ({productId}) => {
  return (
    <div>
              <button
        className={`mt-4 w-full border-2 border-brandRed
         text-brandRed py-2 rounded-lg transition duration-300 hover:bg-brandRed hover:text-white md:text-md text-smPPRODUC`}
        onClick={() => {
          // Add to cart function goes here
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCartBtn
