import { configureStore } from "@reduxjs/toolkit";
import reducerGame from "./reducers/reducerGame";

let store = configureStore({
    reducer: {
      reducerGame
  },
});

export default store;
