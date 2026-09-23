import mongoose from "mongoose";


const connectedb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connection successful");
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        process.exit(1)
    }
}

export default connectedb

