"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./index.css";
import SplitType from "split-type";
import localFont from "next/font/local";

const font = localFont({
  src: "./BandeinsStrangeVariableGX.ttf",
});

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new SplitType("[data-text]");

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLDivElement>("[data-text]")
        .forEach((item, index) => {
          gsap.to(item.querySelectorAll(".char"), {
            "--wdth": 600,
            yoyo: true,
            ease: "sine.inOut",
            duration: 1.5,
            repeat: -1,
            stagger: {
              yoyo: true,
              each: 0.82,
              repeat: -1,
            },
          });
        });
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="flex items-center justify-start h-screen pl-5 xl:pl-12 text-green-500 bg-gray-100"
      ref={mainRef}
    >
      <div
        className="font-bold uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[150px]"
        style={font.style}
      >
        <div data-text>DEADRABBIT</div>
        <div className="flex items-center">
          <div data-text>MAKE</div>
          <div
            className="overflow-hidden brightness-125 rounded-full h-[25px]  md:h-[50px] lg:h-[70px]  xl:h-[85px] 2xl:h-[100px] aspect-[3/1] mt-1 md:mt-2 lg:mt-4"
            style={{
              background:
                "url(/variable-font/clover-gaf52a381e_640.jpg) no-repeat top center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div data-text>creative</div>
        <div className="flex items-center">
          <div
            className="overflow-hidden brightness-125 rounded-full h-[25px]  md:h-[50px] lg:h-[70px]  xl:h-[85px] 2xl:h-[100px] aspect-[3/1] mt-1 md:mt-2 lg:mt-4"
            style={{
              background:
                "url(/variable-font/pine-g404bd19d6_640.jpg) no-repeat left center",
              backgroundSize: "cover",
            }}
          ></div>
          <div data-text>things</div>
        </div>
        <div data-text>Everyday→</div>
      </div>
    </div>
  );
}
