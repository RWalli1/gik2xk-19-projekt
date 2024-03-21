// Importing icons and Material UI components
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ListItem, List, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom"; // For navigation

function Navbar() {
  return (
    <>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: useMediaQuery("(min-width: 450px)") ? "row" : "column", // Responsive layout: row for wide screens, column for narrow
          listStyle: "none", // Remove default list styling
        }}
      >
        {/* List item for the shop's main page link */}
        <ListItem sx={{ justifyContent: "center" }}>
          <VideogameAssetIcon sx={{ marginRight: 1 }} /> {/* Game icon */}
          <Link to="/">Gameshop</Link> {/* Link to the homepage */}
        </ListItem>
        {/* List item for creating a new product */}
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/new/">Create product</Link>{" "}
          {/* Link to product creation page */}
        </ListItem>

        {/* List item for viewing all products */}
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/">All products</Link>{" "}
          {/* Link to products page */}
        </ListItem>

        {/* List item for the shopping cart */}
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/user/1/getCart/">
            <ShoppingCartIcon /> {/* Shopping cart icon */}
          </Link>{" "}
          {/* Link to the user's cart */}
        </ListItem>
      </List>
    </>
  );
}

export default Navbar; // Exporting the Navbar component for use in other parts of the app
