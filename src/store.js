import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/cars/carsSlice";

export default configureStore({
  reducer: {
    cars: carReducer,
  },
});
