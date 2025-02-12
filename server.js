// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Requests (CORS)
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'p
