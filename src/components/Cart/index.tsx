import { useContext } from "react";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";

import { CartContext } from "@/providers/cart";
import CartItem from "../CartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "../ui/separator";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <section className="relative flex h-[100%] flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Carrinho vazio.{" "}
            <span className="font-bold">Vamos fazer compras?</span>
          </p>
        )}
      </div>

      {products.length > 0 && (
        <div className="absolute bottom-0 flex w-[100%] flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold lg:text-base">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
