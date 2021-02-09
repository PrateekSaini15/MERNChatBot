import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_SELECTED_ITEM_FROM_CART,
} from "../actions/actionTypes";

const intialState = {
  items: [],
};

export default function cartReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case CLEAR_CART:
      return { ...state, items: [] };
    case REMOVE_SELECTED_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
}
