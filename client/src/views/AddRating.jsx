import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAll, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProductRateMedium from "../components/ProductRateMedium";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

function AddRating() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            Add Rating
          </Typography>
        </Box>
        <Box sx={{ margin: "1 rem" }}>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
        </Box>
        <Box>
          <ProductRateMedium product={product} />
        </Box>
      </List>
    </>
  );
}
export default AddRating;
