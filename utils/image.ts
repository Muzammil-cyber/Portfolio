import path from "node:path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getImageLocal = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

// Usage
// const { base64, img } = await getImage("/assets/image/example.jpg");

export const getImageRemote = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

// Usage
//   const { base64, img } = await getImage(
//     "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
//   );
