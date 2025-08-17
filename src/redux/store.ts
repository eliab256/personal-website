import { configureStore } from "@reduxjs/toolkit";
import { currentPageReducer } from "./pagesSlice";
import { selectedProjectReducer } from "./selectedProjectSlice";

export default configureStore({
  reducer: {
    currentPage: currentPageReducer,
    selectedProject: selectedProjectReducer,
  },
});
