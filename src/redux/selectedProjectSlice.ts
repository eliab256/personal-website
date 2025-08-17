import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProjectName = string | null;

interface SelectedProjectState {
  name: ProjectName;
}

const initialState: SelectedProjectState = {
  name: null,
};

export const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<ProjectName>) => {
      state.name = action.payload;
    },
    clearSelectedProject: (state) => {
      state.name = null;
    },
  },
});

export const { setSelectedProject, clearSelectedProject } = selectedProjectSlice.actions;

export const selectedProjectReducer = selectedProjectSlice.reducer;
