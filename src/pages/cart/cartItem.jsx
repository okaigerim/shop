import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="w-[700px] h-[250px] flex items-center border shadow-xl rounded-[25px] m-[30px]">
      <img src={productImage} alt="imageofproduct" className="w-[200px]" />
      <div className="w-full text-[30px]">
        <p className="font-bold">{productName}</p>
        <p> Price: ${price}</p>
        <div>
          <button
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="w-[40px] text-center font-bold"
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
