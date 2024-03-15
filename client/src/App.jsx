import { Link, Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Gameshop</Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ul>
        <li>
          <Link to="/products/new/">Create product</Link>
        </li>
        <li>
          <Link to="/products/:id/edit/">Edit product</Link>
        </li>
        <li>
          <Link to="/products/">All products</Link>
        </li>

        <li>
          <Link to="/products/:id/">Show product</Link>
        </li>
        <li>
          <Link to="/user/:id/getCart/">Show Cart</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
