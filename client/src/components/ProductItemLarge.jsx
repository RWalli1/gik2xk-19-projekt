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

function ProductItemLarge({ product }) {
  function productDelete() {
    remove(product.id).then((response) => console.log(response));
  }
  return (
    <>
      <Card
        sx={{
          minWidth: "50rem",
          maxWidth: "80rem",
          minHeight: "5rem",
        }}
      >
        <CardMedia
          sx={{ height: 600 }}
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
          <Typography gutterBottom variant="h5" component="div">
            {`$${product.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <AddShoppingCartIcon />
          </Button>
          <Button size="small"></Button>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            value={product.averageRating}
            readOnly
          />
          <Link to={`/products/${product.id}/edit`}>
            <EditIcon />
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemLarge;
