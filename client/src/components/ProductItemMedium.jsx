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

function ProductItemMedium({ product }) {
  return (
    <>
      <Card
        sx={{
          minWidth: "37rem",
          maxWidth: "60rem",
        }}
      >
        <CardMedia
          sx={{ height: 550 }}
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
          <Button size="small">Add to cart</Button>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            value={product.averageRating}
            readOnly
          />
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItemMedium;
