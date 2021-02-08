import express from "express";
import {
  getCategories,
  getCategoriesByTypes,
} from "../../controllers/foodCategoryController.js";
const route = express.Router();

route.post("/get", getCategories);
route.post("/get/by/types", getCategoriesByTypes);
export default route;
