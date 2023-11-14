import Image from "next/image";
import Link from "next/link";

import { FormatCurrency } from "@/helpers/formatCurrency";
import { ProductWithTotalPrice } from "@/helpers/product";
import DiscountBadge from "../DiscountBadge";

interface ProductItemPros {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemPros) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <section className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}

          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold">
                  {FormatCurrency(product.totalPrice)}
                </p>

                <p className="pt-1 text-xs line-through opacity-75">
                  {FormatCurrency(Number(product.basePrice))}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold">
                {FormatCurrency(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </section>
    </Link>
  );
};

export default ProductItem;
