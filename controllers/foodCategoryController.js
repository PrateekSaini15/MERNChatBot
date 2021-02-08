import Category from "../model/Category.js";
import FoodItem from "../model/FoodItem.js";

function getUniqueCategories(foodItems) {
  const categories = [];
  for (let index = 0; index < foodItems.length; index++) {
    const item = foodItems[index];
    for (let j = 0; j < item.Category.length; j++) {
      const element = item.Category[j];
      if (!categories.includes(element)) {
        categories.push(element);
      }
    }
  }
  return categories;
}

export function getCategories(req, res) {
  const restaurantId = req.body.RestaurantId;
  Category.find({ RestaurantId: restaurantId, IsActive: true })
    .then((categories) => res.status(200).json(categories))
    .catch((error) => console.log(error));
}

export function getCategoriesByTypes(req, res) {
  const restaurantId = req.body.RestaurantId;
  const type = req.body.type;
  FoodItem.find({ RestaurantId: restaurantId, Veg_NonVeg: type })
    .then((foodItems) => getUniqueCategories(foodItems))
    .then((categories) => Category.find({ _id: { $in: categories } }))
    .then((categories) => res.status(201).json(categories))
    .catch((error) => res.status(400).json(error));
}
