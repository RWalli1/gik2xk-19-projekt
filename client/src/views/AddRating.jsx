import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAll, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProductItemMedium from "../components/ProductItemMedium";

import Box from "@mui/material/Box";

function AddRating() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Add Rating
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnSpacing: 5,
          rowSpacing: 5,
        }}
      >
        <ProductItemMedium product={product} />
      </Box>
    </>
  );
}