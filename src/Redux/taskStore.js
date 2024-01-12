import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlice";

const taskStore = configureStore({
    reducer:{
        todoSlice
    }
})

export default taskStore