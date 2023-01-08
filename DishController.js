
import { fetchAllDishes , fetchDishesById ,insertDish,updateDish } from "../services/DishService.js";


export async function fetchAllDishesController(req,res){
    try{
        let dishes=await fetchAllDishes();
        return res.status(200).json(dishes);

    }catch(err){
        return res.status(500).send("Error while fetching the dishes");

    }
}

export async function fetchDishByIdController(req,res){
    let id=req.params.id;
 try{
    let dish=await fetchDishesById(id);
    return res.status(200).json(dish);

 }catch(err){
    return res.status(500).send("Error while fetching the dishes by id")

 }

}

export async function insertDishDataController(req,res){
    let data=req.body;
    try{
        let dish=await insertDish(data);
        return res.status(200).json(dish);

    }
    catch(err){
        return res.status(500).send('Data of Dishes is Not insert')


    }
}

export async function updatDishController(req,res){
    let data=req.body;
    let id=req.params.id;
    try{
        let updatedDish=await updateDish(id,data);
        return res.status(200).json(updatedDish);

    }catch(err){
        return res.status(500).send('Data not update in DishData')
    }
}