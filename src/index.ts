import express from "express";
import cors from 'cors';
import http from 'http';
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = 8080
const MONGO_URL = "mongodb+srv://hassan:newcluster0@cluster0.ru9ia9t.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("MongoDB conncected");
        server.listen(PORT,()=>{
            console.log(`Server running on http://localhost:${PORT}/`);
        })
    })
.catch((error:Error)=>{
    console.log(error);
})
