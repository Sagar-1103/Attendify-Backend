import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/database.config.js";
dotenv.config();

const PORT = process.env.PORT||3000

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERR: ",error);
        throw error
    })
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error !!! ",err);
})