const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/register
router.post('/', async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  // Basic validation
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Required fields missing.' });
  }

  try {
    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    // Create new user
    const newUser = new User({ fullName, email, phone, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('❌ Error saving user:', err.message);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
