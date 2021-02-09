import { GET_ITEMS_FOR_CATEGORY } from "./actionTypes";
import axios from "axios";

export const getItems = (props) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/food/get", {
      ...props,
    })
    .then((res) =>
      dispatch({ type: GET_ITEMS_FOR_CATEGORY, payload: res.data })
    )
    .catch((error) => console.log(error));
};
