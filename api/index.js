import express from "express";
import authRoutes from "./routes/auth.js";
// import {postRoutes} from "./routes/posts.js";
// import {userRoutes} from "./routes/users.js";
import cookie from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookie());

app.use("/api/auth",authRoutes);
// app.use("/api/posts",postRoutes);
// app.use("/api/users",userRoutes);

app.listen(4200,()=>{
    console.log("Connected")
})