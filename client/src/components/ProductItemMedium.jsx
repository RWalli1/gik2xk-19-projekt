import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductRating from "./ProductRating";
import AddToCart from "./AddToCart";
import { Box } from "@mui/material";

function ProductItemMedium({ product }) {
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
          <Typography gutterBottom variant="body" fontWeight="bold" component="div"
          sx={{fontSize: 22,
          marginTop:.5,
          }}>
            {`$${product.price}`}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemMedium;
