// Import necessary modules and models
import express from "express";
import cors from "cors";
import  SignupModel  from "./config.js"; // Import the appropriate user model
import bodyParser from "body-parser";
import bcrypt from "bcrypt";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Signup Route Handler
app.post("/signup", async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, mobile, password } = req.body;

    // Check if user already exists
    const existingUser = await SignupModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
 

    // Create new user
    const newUser = await SignupModel.create({
      username,
      email,
      mobile,
      password
    });

    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

// Login 
app.post("/login", async (req, res) => {

  const{username,password}=req.body

  try {
    // Find user by username
    const user = await SignupModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare passwords
    
    if (password==user.password) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
