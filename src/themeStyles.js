import React from 'react';


export const themes = {
  dark: {
    borderStyle: "rgb(56, 68, 77)",
    backgroundColor: "rgb(21, 32, 43)",
  },
};

export const ThemeContext = React.createContext(themes.dark);
