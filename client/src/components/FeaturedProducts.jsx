import ProductItemMedium from "./ProductItemMedium";
import { Grid, Typography } from "@mui/material";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";
import ProductRatingList from "../components/ProductRatingList";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(""); // Add an error state
  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);

  let firstThreeProducts = {};
  if (products.length >= 3) {
    firstThreeProducts = products.slice(0, 3); // just take the first three as an example.
  }

  const testFeaturedProducts = [
    {
      title: "Elias adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
      averageRating: 1.3,
      ratings: [3, 3],
    },
    {
      title: "Raman adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://www.researchgate.net/publication/216293397/figure/fig3/AS:669061860061212@1536528186955/The-cover-of-Super-Mario-Bross.jpg",
      averageRating: 2.5,
      ratings: [],
    },
    {
      title: "Jimmys adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://media.gameshop.se/wp-content/uploads/2019/09/30225538/11392.png",
      averageRating: 5,
      ratings: [],
    },
  ];

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
        Featured Products
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={5}
        rowSpacing={5}
      >
        {error ? (
          <Typography>{error}</Typography>
        ) : products.length > 0 ? (
          products.slice(0, 3).map((product) => (
            <Grid item key={product.title}>
              <ProductItemMedium product={product} />
            </Grid>
          ))
        ) : (
          <Typography>Kunde inte hämta inlägg</Typography>
        )}
      </Grid>
    </>
  );
}

export default FeaturedProducts;