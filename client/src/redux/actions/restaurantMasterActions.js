import {
  GET_ALL_RESTAURANT,
  REMOVE_RESTAURANT,
  SELECT_RESTAURANT,
} from "./actionTypes";
import axios from "axios";
export const getAllRestaurant = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/restaurant/getall")
    .then((res) => dispatch({ type: GET_ALL_RESTAURANT, payload: res.data }))
    .catch((error) => console.log(error));
};

export const selectRestaurant = (RestaurantId) => (dispatch) => {
  localStorage.setItem("RestaurantId", RestaurantId);
  dispatch({ type: SELECT_RESTAURANT, payload: RestaurantId });
};

export const isSelected = () => (dispatch) => {
  const RestaurantId = localStorage.getItem("RestaurantId");
  if (RestaurantId) {
    dispatch({ type: SELECT_RESTAURANT, payload: RestaurantId });
  }
};

export const removeSelectedRestaurant = () => (dispatch) => {
  localStorage.removeItem("RestaurantId");
  dispatch({ type: REMOVE_RESTAURANT });
};
