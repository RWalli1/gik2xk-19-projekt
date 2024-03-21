import { addProduct, getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function AddToCart({ product }) {
  const id = 1; // Assuming 'id' is meant to be a given or dynamic value representing the cart's ID
  const [cart, setCart] = useState(null); // Initialize as null to indicate "not loaded" or "not found"
  const [quantity, setQuantity] = useState(1); // Local state to hold the TextField value
  const [error, setError] = useState(''); // State to track error messages

  useEffect(() => {
    getOne(id).then((cart) => {
      if (cart) {
        setCart(cart);
        setError(''); // Clear any previous errors
      } else {
        setError('Cart not found.');
      }
    }).catch((err) => {
      console.error("Error fetching cart:", err);
      setError('Failed to load cart.');
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
      addProduct(cartRow).then((response) => {
        console.log(response);
        setError(''); // Assuming you want to clear the error after a successful operation
      }).catch((err) => {
        console.error("Error adding product to cart:", err);
        setError('Failed to add product to cart.');
      });
    } else {
      console.log("Cart or product not found!");
      setError('Cart or product not found.');
    }
  }

  return (
    <>
      {error && (
        <Typography color="error">{error}</Typography>
      )}
      <Box>
      <TextField
        label="Amount"
        sx={{ width: "40%" }}
        type="number"
        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        defaultValue={1}
      />
  <Button size="large" variant="outlined" sx={{ height:56}} startIcon={<AddShoppingCartIcon />} onClick={() => onAdd(quantity)}>
    
  </Button>
  </Box>
    </>
  );
}

export default AddToCart;
