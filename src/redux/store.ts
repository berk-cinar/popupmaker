import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducer";
import { createStore } from "redux";
import rootReducer from "./fontReducer";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        rootReducer,
    },
});

