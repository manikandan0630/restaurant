import mongoose, { connect, model } from "mongoose";




const signupSchema  =new mongoose.Schema({
    username:{
        type:String
    },
    
  
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    password:{
        type:String
    }

})

const collection =new mongoose.model("Signup",signupSchema)
export default collection