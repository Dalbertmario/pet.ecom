import { configureStore } from "@reduxjs/toolkit";
import  uiStoreReducer from './src/ui/uistore'


const store = configureStore({
    reducer:{
        uistore : uiStoreReducer
    }
})

export default store