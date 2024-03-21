import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Grid, useMediaQuery } from "@mui/material";
import ProductRating from "./ProductRating";
import Rating from "@mui/material/Rating";
import AddToCart from "./AddToCart";
import RateReviewIcon from "@mui/icons-material/RateReview";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ProductItemLarge({ product }) {
  console.log(product);
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Card
          sx={{
            minWidth: "20rem",
            width: "50%",
          }}
        >
          <CardMedia
            sx={{
              height: useMediaQuery("(min-width: 700px)") ? 500 : 300,
            }}
            image={product.imageUrl}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{
              fontSize: 22,
              marginTop: 0.5,
            
            }}>
              {`$${product.price}`}
            </Typography>
          </CardContent>
          <CardActions>
            <AddToCart product={product} />
            <Link to={`/products/${product.id}/edit`}>
              <Button>
              <EditIcon />
                <Typography>
                  Edit product
                  
                </Typography>
              </Button>
            </Link>
            <Link to={`/products/${product.id}/addRating`}>
              <Button>
              <StarBorderIcon />
                <Typography>
                  Set rating
                </Typography>
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default ProductItemLarge;
