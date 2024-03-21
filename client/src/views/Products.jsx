import ProductList from "../components/ProductList";
import { Typography } from "@mui/material";

// view for all products.
function Products() {
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
        All Products
      </Typography>
      <ProductList />
    </>
  );
}

export default Products;
