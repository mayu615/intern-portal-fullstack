// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const dummyUser = {
        name: "Intern User",
        email,
        referralCode: "INTN123",
        donationAmount: 0,
      };

      localStorage.setItem("loggedInUser", JSON.stringify(dummyUser));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Something went wrong");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f5f9] via-[#dce5df] to-[#bfd9cc] dark:from-gray-900 dark:via-gray-800 dark:to-black px-4"
    >
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl w-full max-w-lg px-10 py-10 sm:px-12"
      >
        <div className="flex justify-center mb-6">
          <FiLogIn className="text-4xl text-green-700 dark:text-teal-400" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-teal-300 mb-6">
          Intern Login
        </h2>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-green-400 transition duration-300 shadow-md"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-green-400 transition duration-300 shadow-md"
            required
          />
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
            background: "linear-gradient(to right, #14532d, #047857, #0f766e)",
            boxShadow: "0px 0px 12px rgba(16,185,129,0.6)",
          }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 text-white shadow-lg transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/"
            className="text-emerald-800 hover:underline dark:text-green-300"
          >
            Sign up
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
