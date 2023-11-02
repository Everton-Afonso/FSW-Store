import Image, { ImageProps } from "next/image";

const Banner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      alt={alt}
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full px-5 pt-5"
    />
  );
};

export default Banner;
