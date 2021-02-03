import { GET_ALL_RESTAURANT } from "../actions/actionTypes";

const initialState = {
  restaurantList: [],
};

export default function restaurantMasterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RESTAURANT:
      return { ...state, restaurantList: action.payload };
    default:
      return state;
  }
}
