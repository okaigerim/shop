import React from "react";

import Product from "./product";

import {PRODUCTS} from "../../products" 

const Shop = () => {
  return (
    <div>
      <div className="mt-[100px] text-center text-[40px]">
        <h1 className="font-bold">Tech Shop</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map(product => <Product key={product.id} data={product} />)}
      </div>
    </div>
  );
};

export default Shop;
