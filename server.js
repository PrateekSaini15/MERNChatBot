import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";

import restaurantMasterRoute from "./routes/RestaurantMaster/restaurantMasterRoute.js";
import foodCategoryRoute from "./routes/FoodCategory/foodCategoryRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
env.config();
const port = process.env.PORT;

mongoose.connect(`mongodb://localhost/${process.env.MONGODB_DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Connceted to database ${process.env.MONGODB_DATABASE}`);
});

app.use("/api/restaurant", restaurantMasterRoute);
app.use("/api/category", foodCategoryRoute);

app.listen(port, () => console.log(`Server started at ${process.env.PORT}`));
