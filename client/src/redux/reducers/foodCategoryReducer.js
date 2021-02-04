import { GET_ALL_CATEGORIES } from "../actions/actionTypes";

const initialState = {
  categoriesList: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, categoriesList: action.payload };

    default:
      return state;
  }
}
