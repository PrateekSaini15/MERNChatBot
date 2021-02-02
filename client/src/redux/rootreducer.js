import { combineReducers } from "redux";

import restaurantMaster from "./reducers/restaurantMasterReducer";

const rootReducer = combineReducers({
  restaurantMaster: restaurantMaster,
});
export default rootReducer;
