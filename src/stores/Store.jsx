import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const Store = configureStore({
    reducer:{
        users:userSlice
    }
});

export default Store;