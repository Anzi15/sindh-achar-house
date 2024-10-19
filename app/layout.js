"use client"
import Header from './components/Header';
import "../app/globals.css"
import "../app/app.css"
import HeaderMsg from './components/HeaderMsg';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProviderProps';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
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
            <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1203417130932778');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1203417130932778&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
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
