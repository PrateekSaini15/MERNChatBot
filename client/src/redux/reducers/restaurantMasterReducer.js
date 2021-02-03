import {
  GET_ALL_RESTAURANT,
  SELECT_RESTAURANT,
  REMOVE_RESTAURANT,
} from "../actions/actionTypes";

const initialState = {
  restaurantList: [],
  selectedRestaurantId: "",
  isRestaurantSelected: false,
};

export default function restaurantMasterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RESTAURANT:
      return { ...state, restaurantList: action.payload };
    case SELECT_RESTAURANT:
      return {
        ...state,
        selectedRestaurantId: action.payload,
        isRestaurantSelected: true,
      };
    case REMOVE_RESTAURANT:
      return {
        ...state,
        selectedRestaurantId: "",
        isRestaurantSelected: false,
      };
    default:
      return state;
  }
}
