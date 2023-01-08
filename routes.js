import express from "express";
import { fetchAllDishesController,fetchDishByIdController, insertDishDataController, updatDishController } from "./controllers/DishController.js";
import { createFeedbackController } from "./controllers/feedbackController.js";
import { fetchAllUPostController, insertPostController,fetchinterestTagPostController,fetchPostUserController } from "./controllers/postController.js";
import { fetchAllUserController, fetchUserByIdController, insertUserController } from "./controllers/userController.js";


let router=express.Router();

router.get('/dish',fetchAllDishesController);

router.get('/dish/:id',fetchDishByIdController);

router.post('/createDish',insertDishDataController);

router.put('/updateDish/:id',updatDishController);

//feedback

router.post('/createfeedback',createFeedbackController);


//User

router.get('/user',fetchAllUserController);
router.post('/createUser',insertUserController);
router.get('/user/:id',fetchUserByIdController);


//Post

router.get('/post',fetchAllUPostController);
router.post('/createPost',insertPostController);
router.get('/postinterestTag',fetchinterestTagPostController);
router.get('/getPostsByUser/:id',fetchPostUserController);


export {router as routes}
