import CartItemSmall from "../components/CartItemSmall";
import { getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

function Carts() {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    getOne(id).then((cart) => setCart(cart));
  }, [id]);

  const testCart = {
    payed: false,
    cartItems: [
      {
        title: "Elias medicinspel",
        description: "Spännande pusselspel som liknar tetris",
        price: 19,
        imageUrl:
          "https://media.gameshop.se/wp-content/uploads/2019/09/30225538/11392.png",
        amount: 3,
      },
    ],
  };

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <CartItemSmall cartItem={testCart.cartItems[0]} />
      </Box>
    </>
  );
}

export default Carts;
