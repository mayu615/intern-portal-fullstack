import React, { useContext, useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaPlus, FaMinus } from "react-icons/fa";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const [userData, setUserData] = useState(null);
  const [donation, setDonation] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("loggedInUser");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      setDonation(parsedData.donationAmount || 0);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out!");
    navigate("/");
  };

  const updateDonation = (newAmount) => {
    const updatedUser = { ...userData, donationAmount: newAmount };
    setUserData(updatedUser);
    setDonation(newAmount);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    toast.success("Donation updated!");
  };

  const increment = () => updateDonation(donation + 50);
  const decrement = () => updateDonation(Math.max(0, donation - 50));
  const handleManualInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    updateDonation(value);
  };

  const copyReferral = () => {
    navigator.clipboard.writeText(userData?.referralCode || "");
    toast.success("Referral code copied!");
  };

  const rewardMessage =
    donation >= 2000
      ? "Gold"
      : donation >= 1000
      ? "Silver"
      : donation >= 500
      ? "Bronze"
      : null;

  const darkButton =
    "bg-gradient-to-r from-green-800 to-green-900 text-white hover:from-green-700 hover:to-green-800";
  const lightButton =
    "bg-gradient-to-r from-green-300 to-green-500 text-white hover:from-green-400 hover:to-green-600";

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 transition-all duration-500 ease-in-out ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-green-50 to-white text-gray-900"
      }`}
    >
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Logout Button - Bottom Left */}
      <div className="absolute bottom-4 left-4">
        <button
          onClick={handleLogout}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 hover:scale-105 shadow-md ${
            theme === "dark" ? darkButton : lightButton
          }`}
        >
          Logout
        </button>
      </div>

      {/* Welcome Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Welcome, {userData?.name} 🎉
        </h1>
      </div>

      {/* Referral & Donation Card - Centered */}
      <div
        className={`w-full max-w-xl mx-auto p-8 rounded-xl shadow-xl border transition-all duration-500 text-center ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
            : "bg-gradient-to-br from-green-100 to-green-200 border-gray-300"
        }`}
      >
        <p className="text-xl mb-4">
          <strong>Referral Code:</strong>{" "}
          <span
            className="cursor-pointer underline hover:text-blue-500 dark:hover:text-yellow-400"
            onClick={copyReferral}
          >
            {userData?.referralCode}
          </span>
        </p>

        <p className="text-xl mb-4">
          <strong>Donation Amount:</strong> ₹{donation}
        </p>

        <div className="flex items-center justify-center flex-wrap gap-4 mt-4">
          <button
            onClick={decrement}
            className={`text-xl p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-red-800 hover:bg-red-600 text-white"
                : "bg-red-200 hover:bg-red-300 text-red-800"
            }`}
          >
            <FaMinus />
          </button>

          <input
            type="number"
            value={donation}
            onChange={handleManualInput}
            className={`text-center font-bold border border-gray-400 rounded-lg px-4 py-2 w-28 text-xl tracking-wider outline-none transition duration-300 shadow-sm ${
              theme === "dark"
                ? "bg-gray-900 text-white border-gray-600"
                : "bg-white text-gray-800"
            }`}
          />

          <button
            onClick={increment}
            className={`text-xl p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-green-700 hover:bg-green-600 text-white"
                : "bg-green-300 hover:bg-green-400 text-green-900"
            }`}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="mt-12 w-full px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center">🎖️ Your Rewards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:flex md:flex-wrap md:justify-center">
  {[
    {
      tier: "Bronze",
      threshold: 500,
      color: "from-yellow-500 to-yellow-700",
      emoji: "🥉",
    },
    {
      tier: "Silver",
      threshold: 1000,
      color: "from-gray-300 to-gray-500",
      emoji: "🥈",
    },
    {
      tier: "Gold",
      threshold: 2000,
      color: "from-yellow-200 to-yellow-400",
      emoji: "🥇",
    },
  ].map((reward, idx) => (
    <div
      key={idx}
      className={`p-4 sm:p-6 w-full sm:w-auto md:w-1/3 lg:w-auto rounded-xl shadow-md text-center transition-all transform hover:scale-105 bg-gradient-to-br ${reward.color} text-black dark:text-white`}
    >
      <div className="text-3xl sm:text-4xl mb-2">{reward.emoji}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-1">{reward.tier} Tier</h3>
      <p className="text-sm sm:text-base">Donate ₹{reward.threshold}+ to unlock</p>
    </div>
  ))}
</div>


        {rewardMessage && (
          <div
            className={`mt-10 text-center py-6 px-4 rounded-xl shadow-xl font-semibold text-xl animate-pulse ${
              rewardMessage === "Gold"
                ? theme === "dark"
                  ? "bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 text-white"
                  : "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black"
                : rewardMessage === "Silver"
                ? theme === "dark"
                  ? "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white"
                  : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-black"
                : rewardMessage === "Bronze"
                ? theme === "dark"
                  ? "bg-gradient-to-r from-yellow-800 via-yellow-900 to-yellow-950 text-white"
                  : "bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black"
                : ""
            }`}
          >
            🎉 Congratulations! You've achieved the {rewardMessage} Tier!
          </div>
        )}
      </div>

      {/* Leaderboard Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/leaderboard")}
          className={`text-lg font-medium rounded-xl px-6 py-3 transition-transform transform hover:scale-105 shadow-md ${
            theme === "dark" ? darkButton : lightButton
          }`}
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
