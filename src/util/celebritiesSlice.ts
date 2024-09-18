import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CelebritiesState, Celebrity } from "./type";
import { celebrities } from "./constant";

// Initial state for the celebrities slice
const initialState: CelebritiesState = {
  celebrities: [...celebrities],
};

// Create a slice for celebrities with actions and reducers
const celebritiesSlice = createSlice({
  name: "celebrities",
  initialState,
  reducers: {
    // Action to delete a celebrity by id
    deleteCelebrity: (state, action: PayloadAction<number>) => {
      state.celebrities = state.celebrities.filter(
        (celebrity) => celebrity.id !== action.payload
      );
    },
    // Action to edit a celebrity's details by id
    editCelebrity: (
      state,
      action: PayloadAction<{
        id: number;
        updatedCelebrity: Partial<Celebrity>;
      }>
    ) => {
      const { id, updatedCelebrity } = action.payload;
      const index = state.celebrities.findIndex((celeb) => celeb.id === id);
      if (index !== -1) {
        state.celebrities[index] = {
          ...state.celebrities[index],
          ...updatedCelebrity,
        };
      }
    },
  },
});

export const { deleteCelebrity, editCelebrity } = celebritiesSlice.actions;
export default celebritiesSlice.reducer;
