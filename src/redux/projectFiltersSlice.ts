import type { ProjectType, SchoolType, ProgrammingLanguagesType } from "../types/projectTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ProjectFilterType = ProjectType | null;
type SchoolFilterType = SchoolType | null;
type ProgrammingLanguagesFilterType = ProgrammingLanguagesType | null;

interface CurrentFiltersStateType {
  projectFilterType: ProjectFilterType;
  schoolFilterType: SchoolFilterType;
  programmingLanguagesFilterType: ProgrammingLanguagesFilterType | null;
}

const initialState: CurrentFiltersStateType = {
  projectFilterType: null,
  schoolFilterType: null,
  programmingLanguagesFilterType: null,
};

export const projectFiltersSlice = createSlice({
  name: "projectFiltersState",
  initialState,
  reducers: {
    //PROJECT
    setProjectFilter: (state, action: PayloadAction<ProjectType>) => {
      state.projectFilterType = action.payload;
    },
    clearProjectFilter: (state) => {
      state.projectFilterType = null;
    },

    //SCHOOL
    setSchoolFilter: (state, action: PayloadAction<SchoolType>) => {
      state.schoolFilterType = action.payload;
    },
    clearSchoolFilter: (state) => {
      state.schoolFilterType = null;
    },

    //PROGRAMMING LANGUAGES
    setProgrammingLanguageFilter: (state, action: PayloadAction<ProgrammingLanguagesType>) => {
      state.programmingLanguagesFilterType = action.payload;
    },
    clearProgrammingLanguageFilter: (state) => {
      state.programmingLanguagesFilterType = null;
    },

    //RESET ALL FILTERS
    clearAllFilters: (state) => {
      state.projectFilterType = null;
      state.schoolFilterType = null;
      state.programmingLanguagesFilterType = null;
    },
  },
});

export const { setProjectFilter, clearProjectFilter, setSchoolFilter, clearSchoolFilter, setProgrammingLanguageFilter, clearProgrammingLanguageFilter, clearAllFilters } =
  projectFiltersSlice.actions;

export const currentFiltersReducer = projectFiltersSlice.reducer;
