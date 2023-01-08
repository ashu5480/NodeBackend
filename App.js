import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes.js";
import cors from 'cors';


let app=express();

app.use(express.json());
app.use(cors());



const databaseUrl= 'mongodb+srv://yogiGujar:11yogigujar@cluster0.udqar81.mongodb.net/test';
mongoose.set('strictQuery', true);
mongoose.connect(databaseUrl,);
const database=mongoose.connection;

database.on('error',(error)=>{
    console.log('Error while conecting to datbase')
})

database.once('connected',()=>{
    console.log("Connected to data base111")
})


app.use(routes)

app.get('/yogigujar',(req,res)=>{
    res.status(200).send("server is up and Run...!!!");
})

app.listen(5000,()=>{
    console.log("Yogilesh Guajr on port 5000")

});
  