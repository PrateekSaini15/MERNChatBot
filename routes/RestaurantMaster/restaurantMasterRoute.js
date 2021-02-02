import express from "express";

import { getAllRestaurants } from "../../controllers/restaurantMasterController.js";

const route = express.Router();

route.get("/getall", getAllRestaurants);

export default route;
