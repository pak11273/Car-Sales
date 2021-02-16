import { ADD_FEATURE } from "../types";

export const addFeature = (payload) => {
  return {
    type: ADD_FEATURE,
    payload,
  };
};
