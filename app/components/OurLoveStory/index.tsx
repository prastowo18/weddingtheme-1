import React, { useMemo } from "react";

import Image from "next/image";
import SectionTitle from "../SectionTitle";

interface IProps {
  data: any;
}
export function OurLoveStory(props: IProps) {
  const { data } = props;

  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="ourlovestory"
          className="flex flex-col items-center w-full pt-20 px-7 lg:px-28"
        >
          <SectionTitle
            withImg
            title="Our Love Story"
            desc="Berikut ialah perjalanan kisah cinta kamu dari awal bertemu hingga kini memutuskan ke jenjang lebih serius"
          />
          <div className="flex flex-col w-full pt-20 pb-20 md:pb-32 md:px-10">
            {data.map((item: any, idx: number) => (
              <div
                className="flex flex-col items-center justify-center gap-5 mb-8 rounded-md shadow-md md:flex-row"
                key={idx}
              >
                <div className="w-full rounded-t-md md:w-1/3 md:rounded-l-md">
                  <Image
                    src={item.image}
                    alt="notes-img"
                    width={350}
                    height={350}
                    className="w-full rounded-t-md md:rounded-l-md"
                  />
                </div>
                <div className="px-4 py-5 md:w-3/4">
                  <h5 className="font-semibold">{item.title}</h5>
                  <h5 className="mb-3 text-sm">{item.date}</h5>
                  <p className="text-sm font-light">{item.story}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default OurLoveStory;
