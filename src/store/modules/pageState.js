import { createAction } from "redux-actions";

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const changeDarkMode = createAction(TOGGLE_DARK_MODE);

const initialState = {
  darkMode: (() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  })(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return {
        ...state,
        darkMode: newDarkMode,
      };

    case "SET_DARK_MODE":
      localStorage.setItem("darkMode", JSON.stringify(action.payload));
      return {
        ...state,
        darkMode: action.payload,
      };

    default:
      return state;
  }
}
