import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAll, getOne, addRating } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProductRateMedium from "../components/ProductRateMedium";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

// Define the AddRating component for adding a product rating
function AddRating() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // fetch underlying product
  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  // Handler for posting a new rating
  function postRating(e) {
    if (product) {
      console.log(`added rating: ${e.target.value}`);
      const rating = {
        rating: e.target.value,
      };
      // Call addRating and navigate on success
      addRating(id, rating).then((response) => {
        navigate(`/products/${id}/`, { replace: true, state: response });
        console.log(response);
      });
    } else {
      console.log("Product not found!");
    }
  }

  if (!product) {
    // Display a loading message or similar if the product is still being fetched
    return (
      <Typography variant="body1" textAlign="center">
        Couldn't get product
      </Typography>
    );
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
            size="large"
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
