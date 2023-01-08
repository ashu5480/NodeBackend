
import { createFeedback} from "../services/FeedbackService.js";



export async function createFeedbackController(req,res){
    let feedback=req.body;

    try{
        let createFeedbacks=await createFeedback(feedback)
        return res.status(200).json(createFeedbacks)

    }
    catch(err){
        return res.status(500).send("Eroor for feedaback",err);

    }

}