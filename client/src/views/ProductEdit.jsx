import DeleteForever from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAll,
  getOne,
  update,
  create,
  remove,
} from "../services/ProductService";

import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emptyProduct = {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    ratings: [],
  };
  const [product, setProduct] = useState(emptyProduct);

  useEffect(() => {
    if (id) {
      getOne(id).then((product) => setProduct(product));
    } else {
      setProduct(emptyProduct);
    }
  }, [id]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }

  function onSave() {
    if (product.id === 0) {
      create(product).then((response) => {
        navigate(`/products/`, {
          replace: true,
          state: { message: `The product ${response.title} was created.` },
        });
      });
    } else {
      console.log("new product:");
      console.log(product);
      update(product).then((response) =>
        navigate(`/products/${product.id}`, { replace: true, state: response })
      );
    }
  }
  function onRatingAdd(ratingString) {
    //splitta arrayen vid kommatecken
    const ratingArray = ratingString.split(",");
    //trimma whitespace runt ratings
    const uniqueAndTrimmedRatings = ratingArray
      .map((rating) => rating.trim())
      .filter((rating) => !product.ratings.includes(rating));

    //slå samman befintlig tag-array med de nya, unika taggarna
    const mergedArray = [...product.ratings, ...uniqueAndTrimmedRatings];

    //spara befintligt inlägg med nya ratings-arrayen till state.
    setProduct({ ...product, ratings: mergedArray });
  }
  function onRatingDelete(ratingToDelete) {
    let testRatings = product.ratings;
    testRatings.splice(ratingToDelete, 1);
    setProduct({ ...product, ratings: testRatings });
    console.log(testRatings);
  }

  function onDelete() {
    remove(product.id).then((response) =>
      navigate(`/products/`, { replace: true, state: response })
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2">
        {product.id ? "Edit product" : "Create product"}
      </Typography>
      <Box mt={4}>
        <form>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.title}
              name="title"
              id="title"
              label="Title"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.description}
              multiline
              minRows={5}
              name="description"
              id="description"
              label="Description"
            />
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                name="price"
                id="price"
                onChange={onChange}
                margin="normal"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Price"
                value={product.price}
              />
            </FormControl>
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.imageUrl}
              name="imageUrl"
              id="imageUrl"
              label="URL to image"
            />
          </Box>

          <Box mt={2}>{/*<TagField onSave={onRatingAdd} />*/}</Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <Button
                startIcon={<ChevronLeftIcon />}
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => navigate(-1)}
              >
                back
              </Button>
              {id && (
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              )}
            </Box>
            <Button
              startIcon={<SaveIcon />}
              onClick={onSave}
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ProductEdit;
