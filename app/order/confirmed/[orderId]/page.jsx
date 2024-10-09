"use client"
import { db } from "@/app/lib/firebase/firbaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";
import { useEffect, useState } from "react";

const OrderConfirmationPage = ({ params }) => {
    const { orderId } = params;
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                console.log("Fetching order with ID:", orderId);
                const orderDoc = await getDoc(doc(db, "Orders", orderId));
                if (orderDoc.exists()) {
                    setOrderData({ ...orderDoc.data(), id: orderDoc.id });
                } else {
                    setOrderData(null); // Order not found
                }
            } catch (error) {
                console.error("Error fetching order:", error);
                setOrderData(null); // Optional: Handle error case
            } finally {
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [orderId]);

    if (loading) {
        return (
            <main className="w-screen flex flex-col overflow-x-hidden">
                <section className="flex items-center gap-3 justify-center py-16 flex-col">
                    <div className="skeleton-loading w-full h-10 rounded mb-4" />
                    <div className="skeleton-loading w-full h-6 rounded mb-2" />
                    <div className="skeleton-loading w-full h-6 rounded mb-2" />
                    <div className="skeleton-loading w-full h-12 rounded" />
                </section>
            </main>
        );
    }

    if (!orderData) {
        return <div>Order not found</div>; // Handle the case when the order doesn't exist
    }

    return (
        <main className="w-screen flex flex-col overflow-x-hidden">
            <section className="flex items-center gap-3 justify-center py-16 flex-col">
                <div className="flex gap-3 items-center">
                    <div className="border-2 border-gray-600 rounded-full w-fit p-3">
                        <IoCheckmark className="text-4xl text-gray-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-gray-600 text-left w-full">
                            Thank you, {orderData?.customer?.firstName}!
                        </h3>
                        <h5 className="text-left text-gray-600">Your order is placed.</h5>
                    </div>
                </div>

                {orderData?.payment?.method !== "COD" && (
                    <div>
                        <p>
                            You have chosen an online payment method.
                            <br />
                            Kindly send us a screenshot of the receipt at{" "}
                            <a
                                className="underline font-bold text-light-blue-800"
                                href="https://wa.me/923323947336"
                                target="_blank"
                            >
                                WhatsApp
                            </a>
                            . <br />
                            In unverified cases, the payment will be COD.
                        </p>
                    </div>
                )}

                <div className="py-10 px-10">
                    <Link
                        href="/products"
                        className="text-center bg-red-800 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-900 mb-8 block"
                    >
                        Continue Shopping
                    </Link>
                    <p>
                        (Use promo code "OLDFRIEND" and get a special discount on your next
                        order 😉)
                    </p>
                </div>
            </section>
        </main>
    );
};

export default OrderConfirmationPage;
