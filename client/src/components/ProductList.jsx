import { Grid, Typography } from "@mui/material";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";
import ProductItemSmall from "./ProductItemSmall"; // cusom component

function ProductList() {
  const [products, setProducts] = useState([]); // State for storing product list
  const [error, setError] = useState(null); // State for storing any errors during data fetching

  // Fetch all products once on component mount
  useEffect(() => {
    getAll()
      .then((products) => setProducts(products)) // Set products if fetch is successful
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later."); // Handle fetch error
      });
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnSpacing={5}
      rowSpacing={5}
    >
      {error ? (
        <Typography>{error}</Typography>
      ) : products?.length > 0 ? (
        products.map((product) => (
          <Grid item key={product.id}>
            <ProductItemSmall product={product} />
          </Grid>
        ))
      ) : (
        <Typography>No products found.</Typography>
      )}
    </Grid>
  );
}

export default ProductList; // Export the component for use in other parts of the application
