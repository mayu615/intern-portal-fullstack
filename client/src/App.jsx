// src/App.jsx
import React, { useContext } from "react";
import AppRoutes from "./routes";
import { ThemeContext } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useContext(ThemeContext); // 🔄 fix: should be 'theme' not 'darkMode'

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc2626",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
