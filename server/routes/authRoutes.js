const express = require('express');
const router = express.Router();
const { findUser, checkUserExists, addUser } = require('../user');
const users = require('../dummyUsers');

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { name, referralCode } = req.body;

  const user = users.find(
    (u) =>
      u.name.toLowerCase().trim() === name.toLowerCase().trim() &&
      u.referralCode.toLowerCase().trim() === referralCode.toLowerCase().trim()
  );

  if (user) {
    const { password, ...safeData } = user;
    res.json({ success: true, intern: safeData });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
