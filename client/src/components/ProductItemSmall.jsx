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
          sx={{ height: 300 }}
          image={product.imageUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>

          <Typography
            gutterBottom
            variant="body"
            component="div"
            sx={{
              fontSize: 22,
              marginTop: 0.5,
            }}
          >
            {`$${product.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Box>
            <AddToCart product={product} />
          </Box>
          <Box>
            <ProductRating product={product} />
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemSmall; // Exporting the component
