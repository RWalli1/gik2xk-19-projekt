import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating"; // Custom component for displaying product ratings
import AddToCart from "./AddToCart"; // Custom component for adding to cart functionality

function ProductItemSmall({ product }) {
  // Check for product validity. It must have title and imageUrl based on database constraints.
  if (!product || !product.title || !product.imageUrl) {
    return <div>Product information unavailable</div>; // Display message if product info is incomplete
  }

  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 300 }} // Set static height for product image
          image={product.imageUrl} // Product image URL
          title={product.title} // Alt text for the image
        />
        <CardContent>
          {/* Product title with a link to product details */}
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>
          {/* Product price displayed prominently */}
          <Typography
            gutterBottom
            variant="body"
            component="div"
            sx={{
              fontSize: 22, // Increase font size for price
              marginTop: 0.5, // Margin top for spacing
            }}
          >
            {`$${product.price}`} // Display price
          </Typography>
        </CardContent>
        <CardActions>
          <Box>
            <AddToCart product={product} /> {/* Add to cart button */}
          </Box>
          <Box>
            <ProductRating product={product} /> {/* Display product rating */}
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemSmall; // Exporting the component
