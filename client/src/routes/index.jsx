// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import ProtectedRoute from "../components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Signup page as Home */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export default AppRoutes;
