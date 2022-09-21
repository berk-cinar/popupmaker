import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducer";

export const store = configureStore({
    reducer: {
        header: headerReducer,
    },
});

