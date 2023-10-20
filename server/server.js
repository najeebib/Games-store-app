import dotenv from 'dotenv';
import express from "express";
import mysql from "mysql"

dotenv.config(); // Load environment variables from the .env file
const app = express();

console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_DATABASE: ${process.env.DB_DATABASE}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

app.get("/",(req,res) =>{
    res.json("hello");
})
app.get("/users",(req,res) =>{
    const q = "DESC users";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    })
    
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});