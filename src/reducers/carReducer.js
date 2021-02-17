import { ADD_FEATURE, REMOVE_FEATURE } from "../types";

const initialState = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: [],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        features: [...state.features, action.payload],
        price: state.price + action.payload.price,
      };

    case REMOVE_FEATURE:
      return {
        ...state,
        features: state.features.filter((feature) => {
          return feature.id !== action.payload.id;
        }),
        price: state.price - action.payload.price,
      };

    default:
      return initialState;
  }
};
