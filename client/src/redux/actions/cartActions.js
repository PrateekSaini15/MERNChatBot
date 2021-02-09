import { ADD_ITEM_TO_CART, CLEAR_CART } from "../actions/actionTypes";

export const addItemToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART, payload: item });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
