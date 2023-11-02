import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import Banner from "./components/banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <section>
      <div className="px-5 pt-5">
        <Banner
          src="/img/banner-home-01.png"
          alt="Até 50% de desconto esse mês!"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </div>

      <div className="mt-8">
        <ProductList products={deals} title="Ofertas" />
      </div>

      <div className="px-5 pt-5">
        <Banner
          src="/img/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="mt-8">
        <ProductList products={keyboards} title="Teclados" />
      </div>
    </section>
  );
}
