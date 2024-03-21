import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToCart from "./AddToCart";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function ProductItemSmall({ product }) {
  // Check if the product is defined and has a title and imageUrl (eftersom de är allowNull: false).
  if (!product || !product.title || !product.imageUrl) {
    return <div>Product information unavailable</div>;
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

export default ProductItemSmall;
