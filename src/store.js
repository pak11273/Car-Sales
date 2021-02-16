import { reducer } from "./reducers";

const { createStore } = require("redux");

export const store = createStore(reducer);
