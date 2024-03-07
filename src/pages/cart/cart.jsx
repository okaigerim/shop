/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./cartItem";

import { ShopContext } from "../../context/shopContext";

import { PRODUCTS } from "../../products";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-bold">Your Cart Items</h1>
      <div className="flex flex-col justify-center items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            className="w-[150px] h-[50px] bg-[#000] text-[white] border-none rounded-[8px] m-[10px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            className="w-[150px] h-[50px] bg-[#000] text-[white] border-none rounded-[8px] m-[10px] cursor-pointer"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
