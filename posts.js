
import mongoose from "mongoose";
import { userSchema } from "./User.js";
import { Schema, Types } from "mongoose";

let postSchema =new mongoose.Schema({
    Title:{
        type:String,
        required:true
      },
      Content:{
        type:String,
        required:true
      },
      interestTag:{
        type:String,
        required:true
      },
      Likes:{
        type:Number,
        default:0
      },
      Dislikes:{
        type:Number,
        default:0
      },
    //   UserId:{type:String,required:true},
        // createdBy:{userSchema}

        // createdBy:{userSchema,type:Schema.Types.Mixed,default:0}
        createdBy:{type:Schema.Types.Mixed}

    
  

    //   createdBy:mongoose.SchemaType.ObjectId

        
},{timestamps:true})

let Post=mongoose.model('post',postSchema);
export {Post};