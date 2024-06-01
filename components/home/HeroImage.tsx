import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="lg:flex hidden w-1/2  items-center justify-center">
      <Image
        src={"/profile-removebg.png"}
        alt="Muzammil's profile picture without background"
        width={256}
        height={320}
        className="rounded-full w-64 h-auto absolute z-30"
      />
      <div className="w-64 h-80 rounded-full image-back absolute z-0"></div>
    </div>
  );
};
export default HeroImage;
