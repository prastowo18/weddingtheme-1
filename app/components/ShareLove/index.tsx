import React, { useMemo } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { toast } from "react-toastify";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function ShareLove(props: any) {
  const { data } = props;
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="sharelove"
          className="flex flex-col items-center w-full pt-16 px-7 lg:px-28 lg:pt-24 lg:pb-28 bg-[#9AA977]/60 text-white"
        >
          <SectionTitle
            title="Share Love"
            desc="Tanpa mengurangi rasa hormat kami, bagi tamu undangan yang ingin memberikan hadiah berupa angpau online maupun hadiah fisik dapat mengirimkannya di:"
            textWhite
          />

          {/* Account Bank */}
          <div className="flex flex-col items-center justify-center w-full gap-5 py-10 md:flex-row md:w-5/6">
            {data.list_bank.map((item: any, idx: any) => (
              <div
                className="w-full px-5 bg-white rounded-md shadow-md py-7 md:w-1/2"
                key={idx}
              >
                <div className="">
                  <Image
                    src={item.logo}
                    alt="notes-img"
                    width={150}
                    height={150}
                    className=""
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-[#9AA977]/80 mt-3 text-sm gap-5">
                  <div className="tracking-wider">
                    <h5 className="">a.n {item.name}</h5>
                    <h5 className="">{item.rek_number}</h5>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-xs hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(`${item.rek_number}`);
                        toast.success("Berhasil Copy No Rekening");
                      }}
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
          <SectionTitle
            title="Share Gift"
            desc=""
            textWhite
          />
          <div className="flex flex-col w-full gap-2 py-10 pt-3 text-center md:pb-24 md:pt-0 md:w-2/3">
            <div className="flex flex-col items-center w-full gap-3 px-5 mx-auto mt-0 bg-white rounded-md shadow-md md:w-2/3 lg:flex-row py-7">
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
                    {data.send_gift_location}
                  </p>
                </div>
                <div className="mx-auto lg:mx-0">
                  <button
                    className="px-3 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-xs hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${data.send_gift_location}`
                      );
                      toast.success("Berhasil Copy Alamat");
                    }}
                  >
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
