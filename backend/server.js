const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const registerRoute = require('./routes/register');

dotenv.config();
connectDB(); // ✅ Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/register', registerRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

