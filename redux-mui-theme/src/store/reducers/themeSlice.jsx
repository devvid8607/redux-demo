import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};
export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
