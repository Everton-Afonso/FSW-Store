import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full"
    />
  );
};

export default Banner;
