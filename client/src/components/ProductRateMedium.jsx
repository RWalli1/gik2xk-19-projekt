import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function ProductRateMedium({ product }) {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 400, minWidth: "22rem" }}
          image={product.imageUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Typography>
          {/* Display read-only rating */}
        </CardContent>
      </Card>
    </>
  );
}

export default ProductRateMedium;
