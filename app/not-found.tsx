// <div style="font-family:system-ui,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center"><div><style>body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}</style><h1 class="next-error-h1" style="display:inline-block;margin:0 20px 0 0;padding:0 23px 0 0;font-size:24px;font-weight:500;vertical-align:top;line-height:49px">404</h1><div style="display:inline-block"><h2 style="font-size:14px;font-weight:400;line-height:49px;margin:0">This page could not be found.</h2></div></div></div>

import AnimatedText from "@/components/home/Hero/AnimateText";
import { getImageLocal } from "@/utils/image";

import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  const { img } = await getImageLocal("/not-found.png");
  return (
    <main className="flex-auto min-h-full text-center flex items-center justify-center flex-col sm:flex-row p-10 bg-white dark:bg-slate-900">
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        placeholder="empty"
        priority={false}
        alt="Not Found"
        className="max:sm:w-64 max-sm:h-auto"
      />
      {/* vertical line in between*/}
      <div className="w-1 h-40 bg-slate-200 dark:bg-slate-800 mx-10 hidden sm:block"></div>

      <div className="text-left space-y-4">
        <h1 className="text-4xl font-bold uppercase">
          404 <span className="max-sm:hidden">not found</span>
        </h1>
        <h2 className="text-lg">
          <AnimatedText
            text=" My bad, this page wandered off the map! Let's chart a new course
          using the homepage."
            duration={5}
          />
        </h2>
        <Link href="/" className="secondary-btn m-0">
          Go back home
        </Link>
      </div>
    </main>
  );
}
