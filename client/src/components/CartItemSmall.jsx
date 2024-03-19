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
import ProductRating from "./ProductRating";
import { Grid } from "@mui/material";

function CartItemSmall({ cartItem }) {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 100, width: 100 }}
          image={cartItem.imageUrl}
          title={cartItem.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${cartItem.id}`}>{cartItem.title}</Link>
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
            {`$${cartItem.price}`}
          </Typography>
        </CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {`Amount: ${cartItem.amount}`}
        </Typography>
        <CardActions></CardActions>
      </Card>
    </>
  );
}

export default CartItemSmall;
