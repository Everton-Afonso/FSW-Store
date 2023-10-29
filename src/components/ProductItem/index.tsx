import Image from "next/image";
import { Badge } from "../ui/badge";
import { FormatCurrency } from "@/helpers/formatCurrency";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemPros {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemPros) => {
  return (
    <section className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage} %
          </Badge>
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
  );
};

export default ProductItem;