import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_SELECTED_ITEM_FROM_CART,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  rerender: false, // this is a dummy variable to remount the component when the same item is selected more than once.
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      state = addItemToCart(state, action.payload);
      return { ...state, rerender: !state.rerender };
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

function addItemToCart(state, item) {
  const items = state.items;
  let itemFound = false;
  for (let i = 0; i < items.length; i++) {
    if (item._id === items[i]._id) {
      itemFound = true;
      items[i].Quantity++;
    }
  }
  if (!itemFound) {
    item.Quantity = 1;
    return { ...state, items: [...state.items, item] };
  }
  return { ...state, items: items };
}
