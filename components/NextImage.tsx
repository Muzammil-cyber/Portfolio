import Image, { ImageProps } from "next/image";

const NextImage = ({ alt, src, ...props }: ImageProps) => {
  return <Image src={src} alt={alt} {...props} />;
};
export default NextImage;
