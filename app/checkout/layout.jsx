// checkout/layout.jsx
import "../../app/globals.css";
import "../../app/app.css";
import ToastProvider from '../components/ToastProviderProps';
import { Suspense } from 'react'

export default function CheckoutLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        <Suspense>
        <ToastProvider>
          {/* Checkout page does NOT include Header or Footer */}
          {children}
        </ToastProvider>
        </Suspense>
      </body>
    </html>
  );
}
