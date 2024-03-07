import React, { useContext } from "react";

import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="rounded-[15px] w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center hover:transition duration-300 hover:ease-in cursor-pointer">
      <img src={productImage} alt="icon" className="w-[400px]" />
      <div className="text-center">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button 
      className="bg-transparent border-[2px] border-[#000] min-w-[100px] px-[10px] py-[5px] rounded-[15px] hover:bg-[#000] hover:text-[white] cursor-pointer"
      onClick={()=>{addToCart(id)}}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
