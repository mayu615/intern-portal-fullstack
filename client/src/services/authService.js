// src/services/authService.js

const API_URL = 'http://localhost:5000/api/auth';

// 🔐 Login function
export const loginUser = async (username, referralCode) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, referralCode }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Save intern data to localStorage
    localStorage.setItem('internData', JSON.stringify(data));

    return data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

// 🔓 Logout function
export const logout = () => {
  localStorage.removeItem('internData');
};

// 👤 Get logged-in intern data from localStorage
export const getIntern = () => {
  try {
    const data = localStorage.getItem('internData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing intern data from localStorage:', error);
    return null;
  }
};
