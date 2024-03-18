import ProductItemSmall from "./ProductItemSmall";
import { Grid } from "@mui/material";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";
//import Item from "@mui/item";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);
  const testProducts = [
    {
      id: 1,
      title: "Elias adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
      averageRating: 1.3,
      ratings: [3, 3],
    },
    {
      id: 2,
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
    {
      title: "Jimmys pusselspel",
      description: "klurigt som fan",
      price: 555,
      imageUrl:
        "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
      averageRating: 5,
      ratings: [],
    },
    {
      title: "Elias adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*vlmy4s5h1Y1-DLgK2T4deg.jpeg",
      averageRating: 1.3,
      ratings: [3, 3],
    },
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
      title: "Elias adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
      averageRating: 1.3,
      ratings: [3, 3],
    },
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
      title: "Elias adventure 7",
      description: "äventyr",
      price: 399,
      imageUrl:
        "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
      averageRating: 1.3,
      ratings: [3, 3],
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnSpacing={5}
      rowSpacing={5}
      //columnSpacing={{ xs: 3, sm: 2, md: 3 }}
    >
      {products?.length > 0 ? (
        products
          //.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((product) => (
            <Grid item>
              <ProductItemSmall product={product} />
            </Grid>
          ))
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      )}
    </Grid>
  );
}

export default ProductList;
