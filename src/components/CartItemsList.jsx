import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={nanoid()} cartItem={item} />;
      })}
    </>
  );
};

export default CartItemsList;
