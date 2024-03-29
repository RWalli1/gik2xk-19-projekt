// Importing React and necessary components from React and Material UI
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom"; // For routing

// Defining a functional component to display a small cart item
function CartItemSmall({ cartItem }) {
  // Check if the cart item or essential properties are missing
  if (!cartItem || !cartItem.title || !cartItem.imageUrl) {
    return <div>Cart item information unavailable</div>; // Show an error message if data is incomplete
  }
  // Render the cart item
  return (
    <>
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            sx={{ height: 100, width: 100 }}
            image={cartItem.imageUrl}
            title={cartItem.title} 
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              <Link to={`/products/${cartItem.productId}`}>
                {cartItem.title}
              </Link>
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {`$${cartItem.price}`}
            </Typography>
          </CardContent>
        </Box>
        <Typography gutterBottom variant="body2" component="div">
          {`Amount: ${cartItem.amount}`}
        </Typography>
      </Card>
    </>
  );
}

export default CartItemSmall; // Exporting the component for external use
