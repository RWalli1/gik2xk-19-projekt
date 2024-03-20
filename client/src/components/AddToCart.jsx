import { create, getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

function AddToCart({ product }) {
  const id = 1;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getOne(id).then((cart) => setCart(cart));
  }, [id]);
  function onAdd() {
    console.log(cart);
    if (cart && product) {
      const cartRow = {
        cartId: cart.id,
        productId: product.id,
        amount: 1,
      };
      console.log(cartRow);
      create(cartRow).then((response) => {
        console.log(response);
      });
    } else {
      console.log("cart not found! ");
    }
  }

  return (
    <>
      <Button size="small" onClick={onAdd}>
        <AddShoppingCartIcon />
      </Button>
    </>
  );
}

export default AddToCart;
