import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <section>
      <div className="px-5 pt-5">
        <Image
          src="/img/banner-home-01.png"
          alt="Até 50% de desconto esse mês!"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </section>
  );
}
