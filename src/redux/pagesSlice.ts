import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type PageState = "home" | "portfolio" | "contactMe" | "aboutMe";

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
