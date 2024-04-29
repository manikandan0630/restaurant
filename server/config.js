import mongoose from "mongoose";

const uri = "mongodb://0.0.0.0:27017/users"; // MongoDB URI

// Connect to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Could not connect to MongoDB:", error);
    });



// Define Signup schema
const signupSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    }
});




// Create Signup model
const SignupModel = mongoose.model("Signup", signupSchema);

export default SignupModel

//soignup schema


