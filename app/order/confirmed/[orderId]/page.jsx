"use client"; // Ensure it's on the client side

import React, { useEffect, useState } from 'react';
import { IoCheckmark } from "react-icons/io5";
import Link from 'next/link';
import { collection, doc, getDoc, getDocs,  updateDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase/firbaseConfig'; // Ensure this is the correct import
import ConfirmationEmail from '../../../components/ConfirmationEmail';
import AdminOrderNotification from '../../../components/AdminOrderNotification.js';
import { useSearchParams } from 'next/navigation';

const page = ({ params }) => {
  const orderId = params.orderId;
  console.log(orderId)
  const searchParams = useSearchParams();
  const paymentMethod = searchParams.get('paymentMethod');
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted
  
    const sendConfirmationEmail = async () => {
      try {
        // Log the orderId to make sure it's correct
        console.log("Order ID:", orderId);
  
        // Reference to the specific order document
        const docRef = doc(db, "orders", orderId);
  
        // Fetch the document snapshot
        const orderDoc = await getDoc(docRef);
  
        if (orderDoc.exists()) {
          console.log("Order data:", orderDoc.data());
          if (isMounted) setOrderDetails(orderDoc.data());
  
          // Check if the confirmation email has already been sent
          if (!orderDoc.data().ConfirmationEmailSent) {
            try {
              ConfirmationEmail(orderDoc.data().customer.email, orderDoc.data().customer.firstName);
              await sendNotification();
  
              // Update the document to indicate the confirmation email has been sent
              await updateDoc(doc(db, "orders", orderId), {
                ConfirmationEmailSent: true
              });
            } catch (error) {
              console.log("Error sending email or notification:", error);
            }
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Failed to get order document:", error);
      }
    };
  
    const sendNotification = async () => {
      try {
        // Retrieve admin emails
        const emails = [];
        const emailsSnapshot = await getDocs(collection(db, "Admins"));
        
        // Loop through each document in the collection
        emailsSnapshot.forEach((docSnapshot) => {
          const emailData = docSnapshot.data(); // get document data
          if (emailData.Email) { // safeguard if 'Email' field is present
            emails.push(emailData.Email); // push email into the array
          }
        });
  
        // Call AdminOrderNotification with the order details and the list of admin emails
        AdminOrderNotification(orderDetails, emails);
  
        // Log the emails for debugging
        console.log("Admin emails:", emails);
      } catch (error) {
        console.error("Error sending admin notification:", error);
      }
    };
  
    sendConfirmationEmail();
  
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [orderId]); // added orderId to the dependency array
   // added orderId to the dependency array
  

   return (
    <main className='w-screen flex flex-col overflow-x-hidden '>
      <section className='flex items-center gap-3 justify-center py-16 flex-col'>
        <div className='flex gap-3 items-center'>
          <div className='border-2 border-gray-600 rounded-full w-fit p-3 '>
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

export default page;
