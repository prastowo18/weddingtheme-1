import React, { useMemo } from "react";
import { Gabriela } from "next/font/google";

const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function Hero() {
  const renderMain = useMemo(() => {
    return (
      <header className={`${gabriela.className}`} id="hero">
        <div
          className="w-full bg-no-repeat bg-center lg:bg-[center_top_-23rem] bg-cover"
          style={{
            backgroundImage: "url(/assets/img1.jpg)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black/50 py-80 md:py-[23rem]">
            <div className="text-center lg:-mt-10">
              <span className="text-gray-200 uppercase tracking-[0.4rem]">
                Pernikahan
              </span>
              <h1 className="text-4xl font-bold tracking-widest text-gray-100 lg:text-5xl">
                Windi & Aris
              </h1>
              <p className="max-w-3xl text-lg text-gray-300">31-01-2027</p>
            </div>
          </div>
        </div>
      </header>
    );
  }, []);

  return renderMain;
}

export default Hero;
