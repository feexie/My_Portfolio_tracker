import React, { creareContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = ()  => use useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, seTheme] = useState(
    () => localStorage.getItem("thme") || "light"
);
};
