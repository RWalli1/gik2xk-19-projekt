import ProductItemLarge from "../components/ProductItemLarge";
import ProductRatingList from "../components/ProductRatingList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAll, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);
  console.log(product);

  const testProduct = {
    title: "Elias adventure 7",
    description: "äventyr",
    price: 399,
    imageUrl: "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
    averageRating: 1.3,
    ratings: [3, 3],
  };
  //console.log(product.ratings);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Product Details
      </Typography>
      <ProductItemLarge product={product} />
      <ProductRatingList product={product} />
    </>
  );
}

export default ProductDetails;
