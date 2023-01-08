
import { Feedback } from "../models/feedback.js";


export async function createFeedback(feedback){
    const feedbacks=[];
    feedbacks.push(feedback);
    let createFeedbacks=await Feedback.insertMany(feedbacks);
    return createFeedbacks;
}