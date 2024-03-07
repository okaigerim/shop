import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-[#000] flex justify-end items-center">
      <div className="mr-[50px] flex items-center">
        <Link to="/" className="no-underline text-[white] ml-[20px] text-[25px]">Shop</Link>
        <Link to="/cart" className="no-underline text-[white] ml-[20px] text-[25px]">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
