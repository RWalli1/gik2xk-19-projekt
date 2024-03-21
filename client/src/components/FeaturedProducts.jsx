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
        Featured Products 
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={5}
        rowSpacing={5}
      >
        {error ? (
          <Typography>{error}</Typography> 
        ) : products.length > 0 ? (
          products.slice(0, 3).map(
            (
              product 
            ) => (
              <Grid item key={product.title}>
                <ProductItemMedium product={product} />
              </Grid>
            )
          )
        ) : (
          <Typography>Couldn't get any products.</Typography> 
        )}
      </Grid>
    </>
  );
}

export default FeaturedProducts; // Exporting the component
