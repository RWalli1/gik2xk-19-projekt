import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAll, getOne, addRating } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProductRateMedium from "../components/ProductRateMedium";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

function AddRating() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  function postRating(e) {
    if (product) {
      console.log(`added rating: ${e.target.value}`);
      const rating = {
        rating: e.target.value,
      };
      addRating(id, rating).then((response) => {
        navigate(`/products/${id}/`, { replace: true, state: response });
        console.log(response);
      });
    } else {
      console.log("Product not found!");
    }
  }

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
          <Rating
            name="half-rating"
            defaultValue={0}
            precision={0.5}
            onClick={postRating}
          />
        </Box>
        <Box>
          <ProductRateMedium product={product} />
        </Box>
      </List>
    </>
  );
}
export default AddRating;
