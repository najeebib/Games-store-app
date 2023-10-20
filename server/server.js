import express from "express";
import mysql from "mysql"
import cors from "cors"
import router from "./Routes/Routes.js";

const app = express();
app.use(cors());
app.use('/', router);



app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});