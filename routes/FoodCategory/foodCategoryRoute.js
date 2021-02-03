import express from "express";
import { getCategories } from "../../controllers/foodCategoryController.js";
const route = express.Router();

route.post("/get", getCategories);

export default route;
