import { Dishes } from "../models/dish.js";



export async function fetchAllDishes(){
    let dishes=await Dishes.find({});
    return dishes;
}

export async function fetchDishesById(id){
    let dish=await Dishes.findById(id);
    return dish;
}

export async function insertDish(dishData){
    let dishes=[];
    dishes.push(dishData)
    let dish=await Dishes.insertMany(dishes);
    return dish;
}

export async function updateDish(id,dishData){
    return await Dishes.updateOne({_id:id},dishData);
}