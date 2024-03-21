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
      {error ? ( // Display error message if error state is not null
        <Typography>{error}</Typography>
      ) : products?.length > 0 ? ( // Render product items if products array is not empty
        products.map((product) => (
          <Grid item key={product.id}>
            {" "}
            {/* Key is product id for list efficiency */}
            <ProductItemSmall product={product} />{" "}
            {/* Product item component */}
          </Grid>
        ))
      ) : (
        <Typography>No products found.</Typography> // Message displayed if no products are found
      )}
    </Grid>
  );
}

export default ProductList; // Export the component for use in other parts of the application
