// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    education: "",
    college: "",
    course: "",
    linkedin: "",
    referralInput: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password || !agreed) {
      setError("Please fill all required fields and agree to declaration");
      toast.error("Fill all required fields and check the declaration box");
      return;
    }

    setLoading(true);

    try {
      const dummyUser = {
        ...formData,
        referralCode: "INTN" + Math.floor(Math.random() * 1000),
        donationAmount: 0,
      };

      localStorage.setItem("loggedInUser", JSON.stringify(dummyUser));
      toast.success("Signup successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Signup failed");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 transition duration-500
      bg-gradient-to-br from-[#f1f5f9] via-[#dce5df] to-[#bfd9cc]
      dark:from-gray-900 dark:via-gray-800 dark:to-black text-black dark:text-white"
    >
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="mb-10 text-xl sm:text-2xl md:text-3xl font-semibold text-white px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 shadow-lg backdrop-blur-lg text-center"
      >
        Join Our Intern Program
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl p-8 w-full max-w-3xl"
      >
        <div className="flex justify-center mb-6">
          <FiUserPlus className="text-4xl text-green-700 dark:text-teal-400" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-teal-300 tracking-wide">
          Intern Signup
        </h2>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Standard Fields */}
          {[
            { label: "Full Name", name: "name", type: "text", required: true },
            { label: "Email", name: "email", type: "email", required: true },
            { label: "Password", name: "password", type: "password", required: true },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Gender", name: "gender", type: "text" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Education Level", name: "education", type: "text" },
            { label: "College/University", name: "college", type: "text" },
            { label: "Course/Stream", name: "course", type: "text" },
            { label: "LinkedIn Profile", name: "linkedin", type: "url" },
            { label: "Referral Code (Optional)", name: "referralInput", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "State", name: "state", type: "text" },
            { label: "Zip Code", name: "zip", type: "text" },
          ].map(({ label, name, type, required }) => (
            <div key={name}>
              <label className="block mb-1 font-semibold">{label}</label>
              <input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-green-400 transition-all duration-300 shadow-md"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>

        {/* Declaration Checkbox */}
        <div className="mt-6 flex items-start">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mr-2 mt-1 text-green-600 focus:ring-emerald-500"
          />
          <p className="text-sm text-gray-800 dark:text-gray-300">
            I confirm that the information provided above is correct and I agree to the terms and conditions of the fundraising internship program.
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 12px rgba(16,185,129,0.6)",
            background: "linear-gradient(to right, #14532d, #047857, #0f766e)",
          }}
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 text-white py-2 rounded-xl font-semibold shadow-md transition duration-300 hover:shadow-xl"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </motion.button>

        <p className="mt-5 text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-800 hover:underline dark:text-green-300"
          >
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Signup;
