import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetch", async () => {
  const { data } = await axios.get("http://localhost:3001/cars");
  return data;
});

export const removeCar = createAsyncThunk("cars/remove", async (id) => {
  await axios.delete(`http://localhost:3001/cars/${id}`);
  return id;
});

export const updateCar = createAsyncThunk("cars/update", async (car) => {
  const { data } = await axios.put(`http://localhost:3001/cars/${car.id}`, car);
  return data;
});

const slice = createSlice({
  name: "cars",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(removeCar.fulfilled, (state, action) => {
        state.items = state.items.filter(car => car.id !== action.payload);
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        const idx = state.items.findIndex(car => car.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      });
  }
});
export default slice.reducer;