import { GET_ITEMS_FOR_CATEGORY } from "../actions/actionTypes";

const initialState = {
  itemList: [],
};

export default function foodItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_FOR_CATEGORY:
      return { ...state, itemList: action.payload };

    default:
      return state;
  }
}
