import { configureStore } from "@reduxjs/toolkit";
// import { taskReducer } from "./redux/todoSlice";
import cateReducer from "./redux/cateSlice.js";
// import { brandReducer } from "./redux/brandSlice";
// import { cartReducer } from "./redux/cartSlice";
// import { productsReducer } from "./redux/productsSlice";
// import { billReducer } from "./redux/billSlice";
export const store = configureStore({
    reducer:{
        // task:taskReducer,
        // brand:brandReducer,
        cate:cateReducer
        // cate:cateReducer,
        // cart:cartReducer,
        // products:productsReducer,
        // bill:billReducer,
    }
})