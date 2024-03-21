// Importing React and necessary Material UI components
import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ProductRateMedium({ product }) {
  if (!product) {
    // Display a loading message or similar if the product is still being fetched
    return (
      <Typography variant="body1" textAlign="center">
        Couldn't get product
      </Typography>
    );
  }
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 400, minWidth: "22rem" }} // Set style for media
          image={product.imageUrl} // Product image URL
          title={product.title} // Alt text for accessibility
        />
        <CardContent>
          {/* Product title with a link to product detail page */}
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>
          {/* Rating component could be used here to display product's rating */}
        </CardContent>
      </Card>
    </>
  );
}

export default ProductRateMedium; // Exporting the component for use elsewhere
