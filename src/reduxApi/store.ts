import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./api/products";
import {productsApi} from "./api/products";


const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
