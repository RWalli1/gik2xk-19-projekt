import ProductItemLarge from "../components/ProductItemLarge";
import ProductRatingList from "../components/ProductRatingList";
import { useParams } from "react-router-dom";
import { getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null to differentiate from not yet loaded
  const [error, setError] = useState(""); // Add an error state

  useEffect(() => {
    getOne(id)
      .then((fetchedProduct) => {
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setError(""); // Clear error
        } else {
          // If no product is returned
          setError("Product not found.");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product. Please try again later."); // Set error message on failure
      });
  }, [id]);

  if (error) {
    // error render
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        {error}
      </Typography>
    );
  }

  if (!product) {
    // render other stuff in the meanwhile
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Loading...
      </Typography>
    );
  }

  // Render product
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
