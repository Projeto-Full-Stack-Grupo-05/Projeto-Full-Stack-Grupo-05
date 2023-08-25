import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoard } from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";
import { ProductsPage } from "../pages/ProductsPage";
import { SendEmailResetPassword } from "../pages/resetPassword";
import { ResetPassword } from "../pages/resetPassword/[token]";
import { AdminPage } from "../pages/AdminPage";

export default function AppRouter() {
  const isAtthenticated = false;

  return (
    <Routes>
      <Route
        path="/"
        element={isAtthenticated ? <ProfilePage /> : <Homepage />}
      />
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/resetPassword" element={<SendEmailResetPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  );
}
