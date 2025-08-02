// src/pages/Leaderboard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Toaster } from "react-hot-toast";

const dummyUsers = [
  { id: 1, name: "Mayuri", donationAmount: 9500, referralCode: "REF9500" },
  { id: 2, name: "Ankit", donationAmount: 8800, referralCode: "REF8800" },
  { id: 3, name: "Riya", donationAmount: 7500, referralCode: "REF7500" },
  { id: 4, name: "Rahul", donationAmount: 6000, referralCode: "REF6000" },
  { id: 5, name: "Sneha", donationAmount: 4800, referralCode: "REF4800" },
  { id: 6, name: "Amit", donationAmount: 3200, referralCode: "REF3200" },
  { id: 7, name: "Neha", donationAmount: 2100, referralCode: "REF2100" },
];

const getReward = (index) => {
  if (index === 0) return "Gold";
  if (index === 1) return "Silver";
  if (index === 2) return "Bronze";
  return "-";
};

const getRewardColor = (reward) => {
  switch (reward) {
    case "Gold":
      return "from-yellow-300 to-yellow-500";
    case "Silver":
      return "from-gray-300 to-gray-500";
    case "Bronze":
      return "from-yellow-400 to-yellow-600";
    default:
      return "from-purple-400 to-indigo-600";
  }
};

const Leaderboard = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div
      className={`min-h-screen transition duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Toaster />
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="flex gap-3">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition"
          >
            Toggle Theme
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 md:w-2/3 lg:w-1/2 mx-auto"
      >
        <div
          className={`p-6 rounded-2xl shadow-xl transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Top Fundraising Interns
          </h2>
          <div className="space-y-4">
            {dummyUsers.map((user, index) => {
              const reward = getReward(index);
              const rewardColors = getRewardColor(reward);
              return (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`rounded-xl p-4 bg-gradient-to-r ${rewardColors} text-white shadow-md transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">
                      {index + 1}. {user.name}
                    </span>
                    <span className="text-sm">₹{user.donationAmount}</span>
                  </div>
                  <div className="text-sm mt-1">
                    Reward: <strong>{reward}</strong>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50"
            onClick={() => setSelectedUser(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-2xl p-6 backdrop-blur-md bg-white/20 dark:bg-gray-800/30 text-white shadow-lg max-w-sm w-full`}
            >
              <h3 className="text-xl font-bold mb-2">{selectedUser.name}</h3>
              <p className="mb-1">
                Donation: ₹{selectedUser.donationAmount}
              </p>
              <p className="mb-1">
                Referral Code:{" "}
                <span className="font-mono bg-black/30 px-2 py-1 rounded">
                  {selectedUser.referralCode}
                </span>
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 transition"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Leaderboard;
