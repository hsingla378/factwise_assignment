import { configureStore } from "@reduxjs/toolkit";
import celebritiesReducer from "./celebritiesSlice";

const store = configureStore({
    reducer: {
        celebrities: celebritiesReducer,
    },
});

export default store;
