import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "./Redux/Navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
})