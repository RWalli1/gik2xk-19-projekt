import { addProduct, getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function AddToCart({ product }) {
  const id = 1;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1); // Local state to hold the TextField value

  useEffect(() => {
    getOne(id).then((cart) => setCart(cart));
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
      });
    } else {
      console.log("cart not found! ");
    }
  }

  return (
    <>
      <TextField
        label="Amount"
        sx={{ width: "20%" }}
        type="number"
        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        defaultValue={1}
      />
      <Button size="small" onClick={() => onAdd(quantity)}>
        <AddShoppingCartIcon />
      </Button>
    </>
  );
}

export default AddToCart;
