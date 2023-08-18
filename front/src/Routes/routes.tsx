import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoard } from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";

export default function AppRouter() {
  const isAtthenticated = false;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAtthenticated ? <ProfilePage /> : <Homepage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/car/:name" />
      </Routes>
    </Router>
  );
}
