import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({ ...action.payload, id: crypto.randomUUID() });
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, removeCar } = carSlice.actions;

export default carSlice.reducer;
