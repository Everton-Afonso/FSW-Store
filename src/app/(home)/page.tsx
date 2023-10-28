"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
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
  );
}
