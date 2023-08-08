import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoard } from "../pages/Dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/car/:name" />
      </Routes>
    </Router>
  );
}
