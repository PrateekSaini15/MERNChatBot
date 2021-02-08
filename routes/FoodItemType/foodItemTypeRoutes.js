import express from "express";
import { getfoodItemTypesByRestaurant } from "../../controllers/foodItemTypesController.js";

const route = express.Router();

route.post("/get", getfoodItemTypesByRestaurant);

export default route;
