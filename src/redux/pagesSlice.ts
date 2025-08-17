import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PageState } from "../types/pageTypes";

interface CurrentPageState {
  currentPage: PageState;
}

const initialState: CurrentPageState = {
  currentPage: "home",
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<PageState>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export const currentPageReducer = currentPageSlice.reducer;
