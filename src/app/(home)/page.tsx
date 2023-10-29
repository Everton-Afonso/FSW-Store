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
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="px-5 pt-5">
        <Banner
          src="/img/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>
    </section>
  );
}
