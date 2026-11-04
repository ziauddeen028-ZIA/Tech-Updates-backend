require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db')

const blogRoutes=require('./routes/blogRoutes');
const categoryRoutes=require('./routes/categoryRoutes');

const app = express();
app.use(express.json())

app.use('/api/blog',blogRoutes)
app.use('/api/category',categoryRoutes)

const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is Running");
        });

    } catch (error) {
        console.log("Server startup failed:", error.message);
    }
};

startServer();