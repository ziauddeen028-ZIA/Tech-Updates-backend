 const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("DB Connected"))
        .catch((error) => console.log("DB Connection Error:", error.message));
}

module.exports=connectDB;