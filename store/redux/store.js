import { configureStore } from "@reduxjs/toolkit";
import favReducer from './favorites'

export const store = configureStore({
    reducer:{
        FavMealIds : favReducer
    }
})