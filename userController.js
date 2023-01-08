import { fetchAllUser, fetchUserById, insertUser } from "../services/userServices.js";

export async function fetchAllUserController(req,res){
    try{
        let user=await fetchAllUser();
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).send('Eroor while Fetching the Users')

    }
}

export async function fetchUserByIdController(req,res){
    try{
        let userId=req.params.id;
        let user=await fetchUserById(userId)
        return res.status(200).json(user);

    }catch(err){
        return res.status(500).send('Error while fetching userById')

    }
}

export async function insertUserController(req,res){
    let data=req.body;
    try{
        let user=await insertUser(data);
        return res.status(200).json(user);

    }catch(err){
        return res.status(500).send('Data of User is no Insert')

    }
}