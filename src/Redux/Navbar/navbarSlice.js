import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  sideBar: false,
}

export const NavSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.sideBar = true
    },
    closeSideBar: (state) => {
      state.sideBar = false
    },
  }
})


export const { openSideBar, closeSideBar } = NavSlice.actions
export default NavSlice.reducer