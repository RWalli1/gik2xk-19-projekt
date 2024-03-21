import { Grid, Typography } from "@mui/material";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";
import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    getAll()
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later."); // Set error message on failure
      });
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnSpacing={5}
      rowSpacing={5}
      //columnSpacing={{ xs: 3, sm: 2, md: 3 }}
    >
      {error ? ( // Check if there's an error
        <Typography>{error}</Typography> // Render error message
      ) : products?.length > 0 ? ( // If no error, check if products exist
        products.map((product) => (
          <Grid item key={product.id}>
            <ProductItemSmall product={product} />
          </Grid>
        ))
      ) : (
        <Typography>No products found.</Typography> // Render message if no products
      )}
    </Grid>
  );
}

export default ProductList;
