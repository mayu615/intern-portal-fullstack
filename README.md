# 🧑‍💻 Intern Portal Fullstack Project

A professional full-stack intern fundraising portal where interns can register/login, track donations, earn badges, and view their leaderboard ranking — all in a clean, animated UI. Built with **React.js**, **Node.js**, **Express**, and deployed on **Vercel** and **Render**.

---

## 🔗 Live Demo

- 🔥 **Frontend (Vercel):** [https://intern-portal-frontend.vercel.app](https://intern-portal-frontend.vercel.app)
- 🚀 **Backend (Render):** [https://intern-portal-backend-9gpl.onrender.com](https://intern-portal-backend-9gpl.onrender.com)

---

## 🏗️ Folder Structure

intern-portal-fullstack/
├── client/ # Frontend (React)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── .env # Frontend env vars (if needed)
├── routes/ # Express routes
├── controllers/ # Route handlers
├── utils/ # Helper functions
├── server.js # Backend entry point
├── .env # Backend env vars
├── package.json # Backend dependencies
└── README.md # You're here!

yaml
Copy code

---

## 🔧 Tech Stack

### 💻 Frontend (React)

- React.js + Hooks
- Tailwind CSS
- React Router DOM
- Toast Notifications (react-hot-toast)
- Dark/Light Mode Toggle (Context API)
- Responsive & Professional Design

### 🌐 Backend (Node + Express)

- Node.js
- Express.js
- Dummy JSON-based login/signup
- Static donation & referral data
- REST API (no database)

---

## 📋 Features

- ✅ Dummy Signup & Login System
- ✅ Dashboard:
  - Welcome Message with Name
  - Referral Code
  - Editable Donation Counter (with +/-)
  - Badges: 🥉 Bronze, 🥈 Silver, 🥇 Gold
  - Logout & Theme Toggle
- ✅ Leaderboard:
  - Donation-based sorting
  - Badge animations
  - Position display
- ✅ Fully Responsive Design
- ✅ Animated Green Gradients
- ✅ Smooth transitions for both Dark/Light Mode

---

## 🖼️ Screenshots

### 🔐 Login & Signup

![Auth Pages](client/public/Screentshot%201.png)

### 🏠 Dashboard

![Dashboard](client/public/Screenshot%202.png)

### 🏆 Leaderboard

![Leaderboard](client/public/Screenshot%203.png)

---

## 🚀 Deployment Guide

### ✅ Frontend on Vercel

```bash
cd client
npm install
npm run build
vercel --prod
✅ Backend on Render
Go to https://render.com

Create New Web Service from GitHub

Add env variable:

ini
Copy code
PORT=5000
Ensure scripts in package.json:

json
Copy code
"scripts": {
  "start": "node server.js"
}
🌍 Environment Variables (Optional)
🔐 Backend .env
env
Copy code
PORT=5000
🌐 Frontend client/.env
env
Copy code
REACT_APP_API_BASE_URL=https://intern-portal-backend-9gpl.onrender.com
⚠️ .env files must be added to .gitignore and never committed to GitHub.

🧪 Running Locally
Backend
bash
Copy code
npm install
npm start
Frontend
bash
Copy code
cd client
npm install
npm start
📍 Then open: http://localhost:3000

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss.

📄 License
This project is open-source and free to use for educational, demo, and internship purposes.

```
