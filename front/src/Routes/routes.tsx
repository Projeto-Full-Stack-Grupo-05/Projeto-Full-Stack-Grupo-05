import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/car/:name" />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
    </Router>
  );
}
