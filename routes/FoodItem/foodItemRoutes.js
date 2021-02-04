import express from "express";
import { getFoodItems } from "../../controllers/fooditemController.js";
const route = express.Router();

route.post("/get", getFoodItems);

export default route;
