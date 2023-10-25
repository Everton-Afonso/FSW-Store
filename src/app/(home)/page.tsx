"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/img/banner-home-01.png"
        alt="Até 50% de desconto esse mês!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
