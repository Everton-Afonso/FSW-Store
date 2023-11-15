"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProcut extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProcut[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDescount: number;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDescount: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDescount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
