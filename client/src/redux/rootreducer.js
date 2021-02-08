import { combineReducers } from "redux";

import restaurantMaster from "./reducers/restaurantMasterReducer";
import foodCategory from "./reducers/foodCategoryReducer";
import foodItem from "./reducers/foodItemReducer";

const rootReducer = combineReducers({
  restaurantMaster: restaurantMaster,
  foodCategory: foodCategory,
  foodItem: foodItem,
});
export default rootReducer;
