import React, { useMemo } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function ShareLove() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="sharelove"
          className="flex flex-col items-center w-full pt-16 px-7 lg:px-28 lg:pt-24 lg:pb-28 bg-[#9AA977]/60 text-white"
        >
          <SectionTitle
            title="Share Love"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea
          similique voluptatem itaque, a excepturi omnis inventore aliquam
          exercitationem corporis rerum soluta."
            textWhite
          />

          {/* Account Bank */}
          <div className="grid w-full grid-cols-1 gap-5 py-10 md:w-5/6 md:grid-cols-2">
            {Array(4)
              .fill(undefined)
              .map((item: any, idx: any) => (
                <div
                  className="px-5 bg-white rounded-md shadow-md py-7"
                  key={idx}
                >
                  <div className="">
                    <Image
                      src="/assets/bcalogo.svg"
                      alt="notes-img"
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-[#9AA977]/80 mt-3 text-sm gap-5">
                    <div className="tracking-wider">
                      <h5 className="">a.n Prastowo Adi</h5>
                      <h5 className="">085888123800</h5>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-xs hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer"
                        onClick={() =>
                          navigator.clipboard.writeText("085888123800")
                        }
                      >
                        Copy
                      </button>
                      <button className="px-3 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-xs hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Share Gift */}
          <div className="flex flex-col w-full gap-2 py-24 text-center md:w-2/3">
            <h4 className={`${mrDehaviland.className} text-5xl md:text-6xl`}>
              Share Gift
            </h4>
            <div className="">
              <p className="text-base font-light lg:px-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea
                similique voluptatem itaque, a excepturi omnis inventore aliquam
                exercitationem corporis rerum soluta.
              </p>
            </div>

            <div className="flex flex-col items-center w-full gap-3 px-5 mx-auto mt-10 bg-white rounded-md shadow-md md:w-2/3 lg:flex-row py-7">
              <div className="w-2/3">
                <Image
                  src="/assets/map.png"
                  alt="notes-img"
                  width={70}
                  height={70}
                  className="mx-auto"
                />
              </div>
              <div className="flex flex-col items-center w-full gap-2 text-left md:items-baseline">
                <div className="text-center lg:text-left">
                  <p className="text-sm text-[#9AA977]/80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium repudiandae rem ducimus, quae libero ipsa.
                  </p>
                </div>
                <div className="mx-auto lg:mx-0">
                  <button className="px-3 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-xs hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default ShareLove;
