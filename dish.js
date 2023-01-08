import mongoose from "mongoose";
 let dishesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String
    },
    imageSrc:{
        type:String
    },
    url:{
        type:String,
        default:"www.eduonix.com"
    }
 })


 let Dishes=mongoose.model('dish',dishesSchema);
 export {Dishes};