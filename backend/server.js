import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('✅ API is working!');
});
  
// ✅ POST /api/register route
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation (you can expand this)
  if (!name || !email || !password) {
    return res.status(400).json({ message: '❌ All fields are required' });
  }

  // Mock success response
  res.status(201).json({
    message: '✅ User registered successfully',
    user: {
      name,
      email,
    },
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
