import Category from "../model/Category.js";
export function getCategories(req, res) {
  const restaurantId = req.body.RestaurantId;
  Category.find({ RestaurantId: restaurantId })
    .then((categories) => res.status(200).json(categories))
    .catch((error) => console.log(error));
}
