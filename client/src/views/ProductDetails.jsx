import ProductItemLarge from "../components/ProductItemLarge";
import ProductRatingList from "../components/ProductRatingList";
import { useParams } from "react-router-dom";
import { getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function ProductDetails() {
  // show a more detailed version of the product.
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [error, setError] = useState(""); // State for potential errors

  // Fetch product details by ID
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
  }, [id]); // refresh on id change

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

  // Render product and it's ratings
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
