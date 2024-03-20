import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItem,
  List,
  useMediaQuery,
} from "@mui/material";
/*const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];*/

import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: useMediaQuery("(min-width: 450px)") ? "row" : "column",
          listStyle: "none",
        }}
      >
        <ListItem sx={{ justifyContent: "center" }}>
          <VideogameAssetIcon sx={{ marginRight: 1 }} />
          <Link to="/">Gameshop</Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/new/">Create product</Link>
        </ListItem>

        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/">All products</Link>
        </ListItem>

        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/user/1/getCart/">
            <ShoppingCartIcon />
          </Link>
        </ListItem>
      </List>
    </>
  );
}

export default Navbar;
