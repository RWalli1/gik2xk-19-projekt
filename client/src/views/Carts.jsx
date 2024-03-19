import CartItemSmall from "../components/CartItemSmall";
import { getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Carts() {
  /*useEffect(() => {
    getOne(id).then((cart) => setCart(cart));
  }, [id]);

  console.log(cart);*/
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
      {
        title: "Jimmy medicinspel",
        description: "Spännande pusselspel som liknar tetris",
        price: 19,
        imageUrl:
          "https://media.gameshop.se/wp-content/uploads/2019/09/30225538/11392.png",
        amount: 3,
      },
    ],
  };

  let totalPrice = 0;

  testCart.cartItems.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.amount;
  });
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {testCart.cartItems?.length > 0 ? (
          testCart.cartItems.map((cartItem) => (
            <Box key={cartItem.title}>
              <CartItemSmall cartItem={cartItem} />
            </Box>
          ))
        ) : (
          <h3>Couldn't get cart item</h3>
        )}
        <Typography>The total price is: ${totalPrice}</Typography>
      </Box>
    </>
  );
}

export default Carts;
