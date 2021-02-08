import { GET_FOOD_ITEM_TYPES } from "../actions/actionTypes";

const initialState = {
  types: [],
};

export default function foodItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD_ITEM_TYPES:
      return { ...state, types: action.payload };
    default:
      return state;
  }
}
