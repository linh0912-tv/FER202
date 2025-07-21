import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    addBooking: {
      prepare(payload) {
        return { payload: { id: nanoid(), status: "renting", ...payload } };
      },
      reducer(state, action) {
        state.push(action.payload);
      }
    },
    finishBooking(state, action) {
      const booking = state.find(b => b.id === action.payload);
      if (booking) booking.status = "finished";
    }
  }
});
export const { addBooking, finishBooking } = slice.actions;
export default slice.reducer;
