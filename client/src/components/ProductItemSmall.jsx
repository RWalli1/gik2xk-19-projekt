import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRating from "./ProductRating";

//import Rating from " @mui.com/material-ui/react-rating/";

function ProductItemSmall({ product }) {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 50 }}
          image={product.imageUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            {`$${product.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <AddShoppingCartIcon />
          </Button>

          <ProductRating product={product} />
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemSmall;
