// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
require('./config/passport');

const app = express();

const DB_NAME = "teacher"
// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Configure session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Configure routes
app.use('/', authRoutes);

// Home route
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1><a href="/auth/github">Login with GitHub</a>`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
