"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { IoCheckmark } from "react-icons/io5";
import Link from "next/link";


const OrderConfirmationPage = ({params, searchParams}) => {
  const { orderId } = params;
  const { paymentMethod, name, email } = searchParams; 
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      setLoading(true); // Set loading state
      try {
        const response = await fetch(`/api/order-confirmation?orderId=${orderId}`); // Replace YOUR_ORDER_ID with the actual ID
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setOrderData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching order data:", error);
        setError("Failed to load order data."); // Set error state
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchOrderData();
  }, []);

  if (loading) {
    return     <main className='w-screen flex flex-col overflow-x-hidden'>
    <section className='flex items-center gap-3 justify-center py-16 flex-col'>
      <div className='flex gap-3 items-center'>
        <div className='border-2 border-gray-600 rounded-full w-fit p-3'>
          <IoCheckmark   className='text-4xl text-gray-600' />
        </div>
        <div>
          <h3 className='text-2xl text-gray-600 text-left w-full'>
            Thank you, {name}!
          </h3>
          <h5 className='text-left text-gray-600'>Your order is placed.</h5>
          
        </div>
      </div>
      {paymentMethod !== "COD" && (
        <div>
          <p>You have chosen online payment method <br /> kindly send us a screenshot of the receipt at <a className='underline font-bold text-light-blue-800' href="https://wa.me/923323947336" target='_blank'>WhatsApp</a>, <br /> In unverified cases the payment will be COD</p>
        </div>
      )}
      <div className='py-10 px-10'>
        <Link href="/products" className=' text-center bg-red-800 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-900 mb-8 block'>Continue Shopping</Link>
        <p>(use promo code "OLDFRIEND" and get special discount on your next order 😉)</p>
      </div>
    </section>
  </main>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error handling
  }

  if (!orderData) {
    return <div>No order data available.</div>; // Fallback for no data
  }

  return (
    <main className='w-screen flex flex-col overflow-x-hidden'>
    <section className='flex items-center gap-3 justify-center py-16 flex-col'>
      <div className='flex gap-3 items-center'>
        <div className='border-2 border-gray-600 rounded-full w-fit p-3'>
          <IoCheckmark className='text-4xl text-gray-600' />
        </div>
        <div>
          <h3 className='text-2xl text-gray-600 text-left w-full'>
            Thank you, {name}!
          </h3>
          <h5 className='text-left text-gray-600'>Your order is placed.</h5>
          
        </div>
      </div>
      {paymentMethod !== "COD" && (
        <div>
          <p>You have chosen online payment method <br /> kindly send us a screenshot of the receipt at <a className='underline font-bold text-light-blue-800' href="https://wa.me/923323947336" target='_blank'>WhatsApp</a>, <br /> In unverified cases the payment will be COD</p>
        </div>
      )}
      <div className='py-10 px-10'>
        <Link href="/products" className=' text-center bg-red-800 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-900 mb-8 block'>Continue Shopping</Link>
        <p>(use promo code "OLDFRIEND" and get special discount on your next order 😉)</p>
      </div>
    </section>
  </main>
  );
};

export default OrderConfirmationPage;
