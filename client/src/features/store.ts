import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./optionsSlice";

const store = configureStore ({
    reducer: {
        options: optionsReducer,
    },
})

export default store;
export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;