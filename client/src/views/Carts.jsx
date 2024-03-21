import CartItemSmall from "../components/CartItemSmall";
import { getOne, deleteProducts } from "../services/CartService";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import { RemoveShoppingCart } from "@mui/icons-material";

function Carts() {
  const { id } = useParams();
  const [cart, setCart] = useState(null);
  useEffect(() => {
    getOne(id).then((cart) => setCart(cart));
  }, [id]);

  function clearCart() {
    if (cart && cart.cartItems) {
      deleteProducts(cart.id).then((response) => {
        getOne(id).then((updatedCart) => {
          setCart(updatedCart); // Update state with the fetched data
        });
        console.log(response);
      });
    } else {
      console.log("no items in cart!");
    }
  }

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

  if (!cart) {
    // Render nothing or a loading indicator if cart is null
    return (
      <Typography textAlign="center">
        There was no cart for the user with id: {id}
      </Typography>
    );
  }
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 2,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {cart.cartItems?.length > 0 ? (
            cart.cartItems.map((cartItem) => (
              <Box key={cartItem.title} sx={{ minWidth: 100 }}>
                <CartItemSmall cartItem={cartItem} />
              </Box>
            ))
          ) : (
            <Typography variant="body">Empty cart</Typography>
          )}
        </Box>
      </Card>
      {cart.cartItems?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<RemoveShoppingCart />}
            onClick={clearCart}
          >
            Clear cart
          </Button>
        </Box>
      )}
      <Typography sx={{ marginTop: 2, textAlign: "center" }}>
        The total price is: ${totalPrice}
      </Typography>
    </>
  );
}

export default Carts;
