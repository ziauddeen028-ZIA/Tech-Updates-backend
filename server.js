require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db')

const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes')
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.json({
        message: "Tech Updates API is running successfully"
    });
});

app.use('/api/blog', blogRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/auth', authRoutes);

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("Database connection failed:", error.message);
        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

module.exports = app;