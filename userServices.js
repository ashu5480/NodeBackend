import { User } from "../models/User.js";


export async function fetchAllUser(){
   let users=await User.find({});
   return users;
}

export async function fetchUserById(id){
   let user=await User.findById(id);
    return user;
}

export async function insertUser(userData){
   let users=[];
   users.push(userData)
   let user=await User.insertMany(users);
   return user;
}