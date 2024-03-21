import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, useMediaQuery } from "@mui/material";
import AddToCart from "./AddToCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Stack from "@mui/material/Stack";

function ProductItemLarge({ product }) {
  // Display error message if product data is incomplete
  if (!product || !product.title || !product.imageUrl) {
    return <div>Product information unavailable</div>;
  }
  // Render the large product item
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Card
          sx={{
            minWidth: "20rem",
            width: "50%", // Responsive width
          }}
        >
          <CardMedia
            sx={{
              height: useMediaQuery("(min-width: 700px)") ? 700 : 300, // Responsive height based on screen width
            }}
            image={product.imageUrl} // Product image
            title={product.title}
          />
          <CardContent>
            {/* Product title with link to its page */}
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </Typography>
            {/* Product description */}
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            {/* Product price */}
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
            <Stack direction="column" spacing={1} width="100%">
              {/* Add to Cart button */}
              <AddToCart product={product} />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                {/* Edit product link */}
                <Link to={`/products/${product.id}/edit`}>
                  <Button variant="outlined" startIcon={<EditIcon />}>
                    Edit product
                  </Button>
                </Link>
                {/* Add rating link */}
                <Link to={`/products/${product.id}/addRating`}>
                  <Button variant="outlined" startIcon={<StarBorderIcon />}>
                    Add rating
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default ProductItemLarge; // Exporting the component
