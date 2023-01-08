import { User } from "../models/User.js";
import { fetchAllPost, fetchInterestTagPost, insertPost } from "../services/postService.js";

export async function fetchAllUPostController(req,res){
    try{
        let post=await fetchAllPost();
        return res.status(200).json(post);
    }catch(err){
        return res.status(500).send('Eroor while Fetching the Post')

    }
}

export async function fetchinterestTagPostController(req,res){
    let data=req.body.interestTag;
    try{
        let post=await fetchInterestTagPost(data)
        return res.status(200).json(post);
    }catch(err){
        return res.status(500).send('Eroor while Fetching the interestTag Post')

    }
}

export async function insertPostController(req,res){
    
    // let pId=req.params.id;
      let pId=req.body.UserId;
    let userData=await User.findById(pId);
    let userName=userData.name;
    let userlanguage=userData.language;
    let postData={
        Title:req.body.Title,
        Content:req.body.Content,
        interestTag:req.body.interestTag,
        createdBy:{
            userId:pId,
            name:userName,
            language:userlanguage
        }
    }
        try{
        let post=await insertPost(postData);
        return res.status(200).json(post);

    }catch(err){
        return res.status(500).send('Data of Post is not Insert')

    }
}

export async function fetchPostUserController(req,res){
    let pId=req.params.id;
    try{
        let post=await fetchAllPost(pID);
        return res.status(200).json(post);
    }catch(err){
        return res.status(500).send('Eroor while Fetching the Users')

    }
}