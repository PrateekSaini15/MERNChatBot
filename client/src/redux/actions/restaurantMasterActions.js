import { GET_ALL_RESTAURANT } from "./actionTypes";
import axios from "axios";
export const getAllRestaurant = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/restaurant/getall")
    .then((res) => dispatch({ type: GET_ALL_RESTAURANT, payload: res.data }))
    .catch((error) => console.log(error));
};
