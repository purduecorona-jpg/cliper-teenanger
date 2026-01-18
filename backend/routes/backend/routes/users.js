const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');

function readUsers() {
  return JSON.parse(fs.readFileSync(usersFile, 'utf8'));
}
function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Rejestracja
router.post('/register', (req, res) => {
  const { email } = req.body;
  let users = readUsers();
  if(users.find(u => u.email === email)) return res.status(400).json({ error: 'Użytkownik istnieje' });
  users.push({ email, subscription: 'inactive' });
  saveUsers(users);
  res.json({ success: true });
});

// Sprawdzenie subskrypcji
router.get('/status/:email', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.email === req.params.email);
  if(!user) return res.status(404).json({ subscription: 'inactive' });
  res.json({ subscription: user.subscription });
});

module.exports = router;
