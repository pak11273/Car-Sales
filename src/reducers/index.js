import { carReducer } from "../reducers/carReducer";
import { combineReducers } from "redux";
import { featuresReducer } from "../reducers/featureReducer";

export const reducer = combineReducers({
  car: carReducer,
  additionalFeatures: featuresReducer,
});
