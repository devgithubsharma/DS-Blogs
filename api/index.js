import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cookie from "cookie-parser";
import multer from "multer";
import path from "path";
const app = express();

app.use(express.json());
app.use(cookie());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("../client/public/upload"));
    },
    
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname );
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    return res.status(200).json(file.filename);
  });

  
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);


app.listen(4200,()=>{
    console.log("Connected")
})