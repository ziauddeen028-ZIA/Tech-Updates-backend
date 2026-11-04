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

app.use('/api/blog', blogRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/auth', authRoutes);

const startServer = async () => {
    try {
        await connectDB();

    } catch (error) {
        console.log("Server startup failed:", error.message);
    }
};

startServer();

module.exports = app;