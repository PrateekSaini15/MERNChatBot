import { GET_FOOD_ITEM_TYPES } from "./actionTypes";
import axios from "axios";
export const getFoodItemTypesByRestaurant = () => (dispatch) => {
  axios
    .post("http://localhost:5000/api/type/get", {
      RestaurantId: "600538dc6c6a262144f8aa63",
    })
    .then((res) => {
      dispatch({ type: GET_FOOD_ITEM_TYPES, payload: res.data.types });
    });
};
