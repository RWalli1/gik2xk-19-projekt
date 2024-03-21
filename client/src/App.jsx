import { Link, Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// load dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// main app, is displayed everywhere
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Navbar />
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <Outlet />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
