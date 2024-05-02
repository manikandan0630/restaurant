import mongoose from "mongoose";





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


