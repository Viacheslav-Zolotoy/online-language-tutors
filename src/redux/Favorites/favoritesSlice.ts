import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  teachers: string[];
}

const initialState: FavoritesState = {
  teachers: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.teachers.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher !== action.payload
      );
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
