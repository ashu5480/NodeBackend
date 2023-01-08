import mongoose from "mongoose";
export let userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
      },
      emailId:{
        type:String,
        required:true
      },
      language:{
        type:String,
        required:true
      },
      interests:{
        type:[String],
        default:1

      }
})

let User=mongoose.model('user',userSchema);
export {User};