import express from  'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import path  from 'path';
const app=express();
const PORT = process.env.PORT || 5000;
//const __dirname = path.resolve();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});