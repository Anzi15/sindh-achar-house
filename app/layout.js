"use client"
import Header from './components/Header';
import "../app/globals.css"
import "../app/app.css"
import HeaderMsg from './components/HeaderMsg';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProviderProps';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore"
import { db } from './lib/firebase/firbaseConfig';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/checkout' || pathname.startsWith('/admin'); // Hide on /checkout
  const [headerText, setHeaderText] = useState("Al Zehra Perfumes")


  useEffect(()=>{
    const fetchHeaderMsg = async () => {
        try {
          const docRef = doc(db, "storeManagement", "headerNotificationMsg");
          const docSnap = await getDoc(docRef); // Renamed doc to docSnap
          if (docSnap.exists()) {
            console.log(docSnap.data());
            setHeaderText(docSnap.data().value); // Set the value you need
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching header message:", error);
        }
      };
  

    fetchHeaderMsg()
  },[])


  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        <ToastProvider>
          {!hideHeaderFooter && (
            <>
              <Header >
              <div className="w-full bg-black text-center py-2 text-white md:text-lg sm:text-sm text-[0.85rem]">{headerText}</div>
              </Header>
            </>
          )}
          {children}
          {!hideHeaderFooter && (
            <>
                <Footer />
            </>
          )}
        </ToastProvider>
      </body>
    </html>
  );
}
