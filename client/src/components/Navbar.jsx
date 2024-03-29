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
          flexDirection: useMediaQuery("(min-width: 450px)") ? "row" : "column", 
          listStyle: "none", 
        }}
      >
        
        <ListItem sx={{ justifyContent: "center" }}>
          <VideogameAssetIcon sx={{ marginRight: 1 }} />
          <Link to="/">Gameshop</Link> 
        </ListItem>
        
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/new/">Create product</Link>{" "}
          
        </ListItem>

        
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/products/">All products</Link>{" "}
          
        </ListItem>

        
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/user/1/getCart/">
            <ShoppingCartIcon /> 
          </Link>{" "}
          
        </ListItem>
      </List>
    </>
  );
}

export default Navbar; // Exporting the Navbar component for use in other parts of the app
