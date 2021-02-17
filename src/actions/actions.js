import { ADD_FEATURE, REMOVE_FEATURE } from "../types";

export const addFeature = (payload) => {
  return {
    type: ADD_FEATURE,
    payload,
  };
};

export const removeFeature = (payload) => {
  return {
    type: REMOVE_FEATURE,
    payload,
  };
};
