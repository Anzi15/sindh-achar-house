import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminSignUpPage from './pages/admin/AdminSignUpPage.jsx';
import AdminUnAuthorized from './pages/admin/AdminUnAuthorized.jsx';
import AdminProductsPage from './pages/admin/AdminProductsPage.jsx';
import AdminNewProductPage from './pages/admin/AdminNewProductPage.jsx';
import AdminEditProductPage from './pages/admin/AdminEditProductPage.jsx';
import AdminManagementPage from './pages/admin/AdminManagementPage.jsx';
import AdminNewCoupon from './pages/admin/AdminNewCoupon.jsx';
import AdminCouponEdit from './pages/admin/AdminCouponEdit.jsx';
import AdminOrdersPage from './pages/admin/AdminOrdersPage.jsx';
import AdminLayout from './layouts/AdminLayout.jsx'; // Ensure your admin layout is imported

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path='products' element={<AdminProductsPage />} />
          <Route path='products/new' element={<AdminNewProductPage />} />
          <Route path='products/:id/edit' element={<AdminEditProductPage />} />
          <Route path='management' element={<AdminManagementPage />} />
          <Route path='management/coupons/new' element={<AdminNewCoupon />} />
          <Route path='management/coupons/:couponCode/edit' element={<AdminCouponEdit />} />
          <Route path='orders' element={<AdminOrdersPage />} />
          <Route path='/login' element={<AdminLoginPage />} />
          <Route path='/signup' element={<AdminSignUpPage />} />
          <Route path='/unauthorized' element={<AdminUnAuthorized />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
