"use client"
import Header from './components/Header';
import "../app/globals.css"
import "../app/app.css"
import HeaderMsg from './components/HeaderMsg';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProviderProps';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/checkout' || pathname.startsWith('/admin'); // Hide on /checkout

  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        <ToastProvider>
          {!hideHeaderFooter && (
            <>
              <Header />
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
