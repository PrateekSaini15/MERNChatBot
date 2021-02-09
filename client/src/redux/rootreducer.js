import { combineReducers } from "redux";

import restaurantMaster from "./reducers/restaurantMasterReducer";
import foodCategory from "./reducers/foodCategoryReducer";
import foodItem from "./reducers/foodItemReducer";
import foodType from "./reducers/foodItemTypesReducer";
import cart from "./reducers/cartReducer";

const rootReducer = combineReducers({
  restaurantMaster: restaurantMaster,
  foodCategory: foodCategory,
  foodItem: foodItem,
  foodType: foodType,
  cart: cart,
});
export default rootReducer;
