import foodItemType from "../model/ItemTypes.js";

export function getfoodItemTypesByRestaurant(req, res) {
  const restaurantId = req.body.RestaurantId;
  foodItemType
    .find({ RestaurantId: restaurantId })
    .then((types) => res.status(201).json({ types }))
    .catch((error) => res.status(400).json({ error }));
}
