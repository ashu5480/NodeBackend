import { Post } from "../models/posts.js";


export async function fetchAllPost(){
let post=await Post.find({});
return post;
}

export async function insertPost(postData){S
    let posts=[];
    posts.push(postData)
    let post=await Post.insertMany(posts);
    return post;
 }

 export async function fetchPostByUser(id){
    
    let post=await Post.find({"createdBy.userId":id});
     return post;
 }

 export async function fetchInterestTagPost(data){
    let post=await Post.find({interestTag:data});
    return post;
    }





