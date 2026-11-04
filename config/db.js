 const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("DB Connected"))
        .catch((error) =>{
            return (
                console.log("DB Connection Error:", error.message)
            )
        } )
}

module.exports=connectDB;