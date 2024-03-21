import { addProduct, getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function AddToCart({ product }) {
  const id = 1; // static ID, we don't need to do login stuff.
  const [cart, setCart] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    getOne(id)
      .then((cart) => {
        if (cart) {
          setCart(cart);
          setError(""); // Clear any previous errors
        } else {
          setError("User cart not found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setError("Failed to load cart.");
      });
  }, [id]);

  function onAdd(quantity) {
    if (cart && product) {
      const cartRow = {
        cartId: cart.id,
        productId: product.id,
        amount: quantity,
      };
      console.log(cartRow);
      addProduct(cartRow)
        .then((response) => {
          console.log(response);
          setError("");
        })
        .catch((err) => {
          console.error("Error adding product to cart:", err);
          setError("Failed to add product to cart.");
        });
    } else {
      console.log("Cart or product not found!");
      setError("Cart or product not found.");
    }
  }

  return (
    <>
      {error && <Typography color="error">{error}</Typography>}
      <Box>
        <TextField
          label="Amount"
          sx={{ width: "40%" }}
          type="number"
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
          defaultValue={1}
        />
        <Button
          size="large"
          variant="outlined"
          sx={{ height: 56 }}
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onAdd(quantity)}
        ></Button>
      </Box>
    </>
  );
}

export default AddToCart;
