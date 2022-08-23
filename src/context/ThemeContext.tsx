import { createContext, useState } from 'react';

export const enum ETheme {
  light = 'light',
  dark = 'dark',
}

export const ThemeContext = createContext({
  mode: ETheme.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [mode, setMode] = useState<ETheme>(ETheme.light);

  function toggleMode() {
    return mode === ETheme.dark ? setMode(ETheme.light) : setMode(ETheme.dark);
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
