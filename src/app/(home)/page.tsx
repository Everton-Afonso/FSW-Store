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
    <section className="flex flex-col gap-8">
      <Banner
        src="/img/banner-home-01.png"
        alt="Até 50% de desconto esse mês!"
      />

      <Categories />
      <div>
        <ProductList products={deals} title="Ofertas" />
      </div>

      <Banner
        src="/img/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div>
        <ProductList products={keyboards} title="Teclados" />
      </div>

      <Banner
        src="/img/banner-home-03.png"
        alt="Até 20% de desconto em fones"
      />
    </section>
  );
}
