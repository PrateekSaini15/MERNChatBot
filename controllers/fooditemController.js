import FoodItem from "../model/FoodItem.js";

function makeListOfFoodItems(foodItems) {
  const list = foodItems.map((foodItem) => ({
    _id: foodItem._id,
    ItemName: foodItem.ItemName,
  }));
  return list;
}

export function getFoodItems(req, res) {
  const categoryId = req.body.categoryId;
  const type = req.body.type;
  FoodItem.find({ Category: categoryId, Veg_NonVeg: type })
    .then((items) => makeListOfFoodItems(items))
    .then((list) => res.status(200).json(list))
    .catch((error) => res.status(404).json(error));
}
