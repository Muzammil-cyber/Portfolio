import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "us-east-1-shared-usea1-02.graphassets.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
