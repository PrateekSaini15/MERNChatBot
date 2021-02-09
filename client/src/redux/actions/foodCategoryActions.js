import { GET_ALL_CATEGORIES } from "./actionTypes";
import axios from "axios";

export const getAllCategories = (currentType) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/category/get/by/types", {
      RestaurantId: "600538dc6c6a262144f8aa63",
      type: currentType,
    })
    .then((res) => dispatch({ type: GET_ALL_CATEGORIES, payload: res.data }))
    .catch((error) => console.log(error));
};
