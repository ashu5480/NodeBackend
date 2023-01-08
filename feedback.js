import mongoose from "mongoose";

 let feedbackSchema =new mongoose.Schema({
    name : {
        type:String
    },
    email :{
        type :String,
        required :true
    },
    password :{
        type :String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    hits :{
        type:Number,
        default:1
    }

 })

 let Feedback=mongoose.model('feedback',feedbackSchema);
 export {Feedback};