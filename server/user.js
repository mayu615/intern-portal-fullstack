const users = require('./dummyUsers.js');

const findUser = (email, password) => {
  return users.find(user => user.email === email && user.password === password);
};

const checkUserExists = (email) => {
  return users.some(user => user.email === email);
};

const addUser = (name, email, password) => {
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    referralCode: name.toLowerCase().replace(/\s/g, '') + "2025",
    totalDonations: 0
  };
  users.push(newUser);
  return newUser;
};

module.exports = { findUser, checkUserExists, addUser };
