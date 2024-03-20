import CartItemSmall from "../components/CartItemSmall";
import { getOne } from "../services/CartService";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

function Carts() {
  const { id } = useParams();
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
  console.log("trying to use cart: ");
  console.log(cart);
  if (cart && cart.cartItems) {
    cart.cartItems.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.amount;
    });
  }
  return (
    <>
      <Card sx={{display: "flex", flexDirection: "row", padding: 2, justifyContent:"center"}}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 2
          }}
        >
          {cart.cartItems?.length > 0 ? (
            cart.cartItems.map((cartItem) => 
              <Box key={cartItem.title} sx={{ minWidth: 100 }}>
                <CartItemSmall cartItem={cartItem}/>
              </Box>
            )
          ) : (
            <Typography variant="h6">Couldn't get cart item</Typography>
          )}
        </Box>
      </Card>
      <Typography sx={{ marginTop: 2, textAlign: "center" }}>
        The total price is: ${totalPrice}
      </Typography>
    </>
  );
}

export default Carts;
