import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedIntern = localStorage.getItem("loggedInUser");
    if (storedIntern) {
      setIntern(JSON.parse(storedIntern));
    }
    setLoading(false);
  }, []);

  if (loading) return null; 

  return intern ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
