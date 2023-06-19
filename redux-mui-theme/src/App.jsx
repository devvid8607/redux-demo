import { useMemo, useState } from "react";
import Square from "./components/square/Square";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { getDesignTokens } from "./constants/DesignConstants";

function App() {
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Square />
      </ThemeProvider>
    </>
  );
}

export default App;
