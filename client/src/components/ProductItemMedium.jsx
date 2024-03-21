import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating"; // Custom component for displaying product ratings
import AddToCart from "./AddToCart"; // Custom component for adding products to cart

function ProductItemMedium({ product }) {
  // Checking if the product information is available
  if (!product || !product.title || !product.imageUrl) {
    return <Typography>Product information is not available.</Typography>;
  }
  // Rendering medium-sized product item
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 400 }} 
          image={product.imageUrl} 
          title={product.title} 
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>
          
          <ProductRating product={product} />
        </CardContent>
        <CardActions>
          
          <AddToCart product={product} />
          
          <Typography
            gutterBottom
            variant="body"
            fontWeight="bold"
            component="div"
            sx={{ fontSize: 22, marginTop: 0.5 }}
          >
            {`$${product.price}`}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemMedium; // Exporting the component for reuse
