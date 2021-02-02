import Resturant from "../model/Restaurant.js";
export function getAllRestaurants(req, res) {
  Resturant.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
}
