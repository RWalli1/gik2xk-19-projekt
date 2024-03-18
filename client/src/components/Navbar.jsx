import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <ListItem>
          <VideogameAssetIcon sx={{ marginRight: 1 }} />
          <Link to="/">Gameshop</Link>
        </ListItem>
        <ListItem>
          <Link to="/products/new/">Create product</Link>
        </ListItem>
        <ListItem>
          <Link to="/products/:id/edit/">Edit product</Link>
        </ListItem>
        <ListItem>
          <Link to="/products/">All products</Link>
        </ListItem>

        <ListItem>
          <Link to="/products/:id/">Show product</Link>
        </ListItem>
        <ListItem>
          <Link to="/user/:id/getCart/"><ShoppingCartIcon></ShoppingCartIcon></Link>
        </ListItem>
      </List>
    </>
  );
}

export default Navbar;
