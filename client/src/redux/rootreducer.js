import { combineReducers } from "redux";

import restaurantMaster from "./reducers/restaurantMasterReducer";
import foodCategory from "./reducers/foodCategoryReducer";

const rootReducer = combineReducers({
  restaurantMaster: restaurantMaster,
  foodCategory: foodCategory,
});
export default rootReducer;
