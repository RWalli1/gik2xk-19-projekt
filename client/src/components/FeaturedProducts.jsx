// Importing necessary components and hooks
import ProductItemMedium from "./ProductItemMedium";
import { Grid, Typography } from "@mui/material";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";

function FeaturedProducts() {
  const [products, setProducts] = useState([]); // State for storing products
  const [error, setError] = useState(""); // State for handling errors

  // Fetch all products on component mount
  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);

  let firstThreeProducts = {};
  // Select only the first three products if available
  if (products.length >= 3) {
    firstThreeProducts = products.slice(0, 3);
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "2rem",
          fontWeight: "bold",
        }}
      >
        Featured Products {/* Title for the featured products section */}
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={5}
        rowSpacing={5}
      >
        {error ? (
          <Typography>{error}</Typography> // Display error if present
        ) : products.length > 0 ? (
          products.slice(0, 3).map(
            (
              product // Map through the first three products and render
            ) => (
              <Grid item key={product.title}>
                {" "}
                {/* Each product as a grid item */}
                <ProductItemMedium product={product} />
              </Grid>
            )
          )
        ) : (
          <Typography>Couldn't get any products.</Typography> // Show message if no products are found
        )}
      </Grid>
    </>
  );
}

export default FeaturedProducts; // Exporting the component
