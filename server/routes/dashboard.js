// routes/dashboard.js
const express = require("express");
const router = express.Router();
const users = require("../dummyUsers");

router.get("/dashboard", (req, res) => {
  // For now, just return the first user's data
  const { password, ...safeUser } = users[0];
  res.json({ success: true, intern: safeUser });
});

module.exports = router;
