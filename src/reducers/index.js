import { combineReducers } from "redux";
import sideBarToggle from "./sideBarToggle";
import changeMap from "./changeMap";
import changeInfo from "./changeInfo";

// all individual reducers of the application are imported
// combined using combineReducers and exported as allReducers

const allReducers = combineReducers({
  toggle: sideBarToggle,
  country: changeMap,
  countryInfo: changeInfo,
});

export default allReducers;
