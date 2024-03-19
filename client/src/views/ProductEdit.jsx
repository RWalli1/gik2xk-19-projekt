import DeleteForever from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAll, getOne } from "../services/ProductService";

import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import DeleteIcon from '@mui/icons-material/Delete';
//import SaveIcon from '@mui/icons-material/Save';

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
        navigate("/", {
          replace: true,
          state: { message: `Inlägget ${response.title} skapades.` },
        });
      });
    } else {
      update(product).then((response) =>
        navigate(`/products/${product.id}`, { replace: true, state: response })
      );
    }
  }
  function onRatingAdd(tagString) {
    //splitta arrayen vid kommatecken
    const ratingArray = tagString.split(',');
    //trimma whitespace runt taggar
    const uniqueAndTrimmedRatings = ratingArray
      .map((rating) => rating.trim())
      .filter((rating) => !product.ratings.includes(rating));

    //slå samman befintlig tag-array med de nya, unika taggarna
    const mergedArray = [...product.ratings, ...uniqueAndTrimmedRatings];

    //spara befintligt inlägg med nya ratings-arrayen till state.
    setProduct({ ...product, ratings: mergedArray });
  }
  function onDelete() {
    remove(product.id).then((response) =>
      navigate("/", { replace: true, state: response })
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2">
        {product.id ? "Ändra inlägg" : "Skapa inlägg"}
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
              label="Titel"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.body}
              multiline
              minRows={5}
              name="body"
              id="body"
              label="Innehåll"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={product.imageUrl}
              name="imageUrl"
              id="imageUrl"
              label="Sökväg till bild"
            />
          </Box>
          <Box mt={1}>
            {product?.ratings?.length > 0 &&
              product.ratings.map((tag) => (
                <Chip
                  sx={{ mr: 1 }}
                  onDelete={() => onTagDelete(tag)}
                  key={tag}
                  label={tag}
                />
              ))}
          </Box>
          <Box mt={2}>
            <TagField onSave={onRatingAdd} />
          </Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <Button
                startIcon={<ChevronLeftIcon />}
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => navigate(-1)}
              >
                Tillbaka
              </Button>
              {id && (
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  variant="contained"
                  color="error"
                >
                  Ta bort
                </Button>
              )}
            </Box>
            <Button
              startIcon={<SaveIcon />}
              onClick={onSave}
              variant="contained"
              color="success"
            >
              Spara
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ProductEdit;
