import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

import ProfilePage from "../pages/ProfilePage";
import { ProductsPage } from "../pages/ProductsPage";
import { SendEmailResetPassword } from "../pages/resetPassword";
import { ResetPassword } from "../pages/resetPassword/[token]";
import { AdminPage } from "../pages/AdminPage";

export default function AppRouter() {
  // const isAtthenticated = true;

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/resetPassword" element={<SendEmailResetPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  );
}
