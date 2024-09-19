import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./slice/toDoSlice";

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
