import express from 'express'
import { connect } from 'mongoose';
import { connectDB } from './db.js';
const app= express();
const port=5000;

app.listen(port,(req,res)=>{   
    console.log(`Server is running on port ${port}`);
 }
)
connectDB();