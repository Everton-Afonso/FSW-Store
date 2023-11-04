import ProductItem from "@/components/ProductItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import SectionTitle from "./sectionTitle";

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <>
      {title !== "" && <SectionTitle>{title}</SectionTitle>}

      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <div className="w-[170px] max-w-[170px]" key={product.id}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
