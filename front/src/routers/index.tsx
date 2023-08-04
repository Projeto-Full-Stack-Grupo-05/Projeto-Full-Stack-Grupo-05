import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/car/:name" />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
    </Router>
  );
}
