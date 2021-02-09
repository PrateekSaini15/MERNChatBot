import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_SELECTED_ITEM_FROM_CART,
} from "../actions/actionTypes";

export const addItemToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART, payload: item });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

export const removeSelectedItemFromCart = (item) => (dispatch) => {
  dispatch({ type: REMOVE_SELECTED_ITEM_FROM_CART, payload: item });
};
