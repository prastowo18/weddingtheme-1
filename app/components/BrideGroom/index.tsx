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

export function BrideGroom(props: any) {
  const { data } = props;
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full px-10 pt-5 lg:px-28 lg:pb-28"
        >
          <SectionTitle
            withImg
            withTitleDesc
            title="Bride & Groom"
            titleDesc="The Beloved"
            desc="Dengan memohon ridho serta rahmat dari Allah SWT, kami mengundang bapak/ibu/saudara/i berkenan hadir dalam pernikahan:"
          />
          <div className="grid w-full grid-cols-1 gap-10 py-20 md:grid-cols-2 md:px-10 lg:px-20">
            <div
              className="flex flex-col items-center justify-center gap-5 px-2"
              data-aos="zoom-in"
            >
              <div className="">
                <Image
                  src="/assets/groom2.png"
                  alt="notes-img"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="py-5 text-center">
                <h4 className={`${mrDehaviland.className} text-5xl mb-2`}>
                  {data.groom.name}
                </h4>
                <h5 className={`${gabriela.className} text-lg font-semibold`}>
                  {data.groom.fullname}
                </h5>
                <h5 className={`${gabriela.className} text-base mt-2`}>
                  {data.groom.desc}
                </h5>
                <h5 className={`${gabriela.className} text-base mt-1`}>
                  📍 {data.groom.location}
                </h5>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5 px-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="rounded-full shadow-lg">
                <Image
                  src="/assets/bride.png"
                  alt="notes-img"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="py-5 text-center">
                <h4 className={`${mrDehaviland.className} text-5xl mb-2`}>
                  {data.bride.name}
                </h4>
                <h5 className={`${gabriela.className} text-lg font-semibold`}>
                  {data.bride.fullname}
                </h5>
                <h5 className={`${gabriela.className} text-base mt-2`}>
                  {data.bride.desc}
                </h5>
                <h5 className={`${gabriela.className} text-base mt-1`}>
                  📍 {data.bride.location}
                </h5>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default BrideGroom;
