import express from "express";
import { connect } from "mongoose";
import { connectDB } from "./db.js";
import saveUsertoDB from "./Schema/Signup/AddsignuptoDB.js";
import cors from "cors";
import newUser from "./Schema/Signup/Schema.js";
const app = express();
const port = 5000;

app.use(cors());
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
connectDB();
app.use(express.json());

app.post("/signupDetails", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  // res.json(req.body, "from server")
  res.json(req.body);
  try {
    saveUsertoDB(name, email, password);
  } catch (err) {
    console.log(err);
  }
});

app.get("/loginDetails", async (req, res) => {
  try {
    const allUsers = await newUser.find({});

    console.log(JSON.stringify(allUsers, null, 2));
    res.json(allUsers);
    
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});
