import React, { useMemo } from "react";
import { Mr_De_Haviland, Gabriela } from "next/font/google";

import Image from "next/image";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

interface IProps {
  title: string;
  titleDesc?: string;
  desc: string;
  withImg?: boolean;
  withTitleDesc?: boolean;
  textWhite?: boolean;
}

export function SectionTitle(props: IProps) {
  const { withImg, withTitleDesc, titleDesc, title, desc, textWhite } = props;
  const renderMain = useMemo(() => {
    return (
      <div
        className={`flex flex-col w-full gap-2 md:pb-10 text-center ${
          textWhite ? "" : "text-black"
        } md:w-2/3`}
      >
        {withImg && (
          <div className="">
            <Image
              src="/assets/sectionimg.svg"
              alt="notes-img"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        )}
        <h4 className={`${mrDehaviland.className} text-5xl md:text-6xl`}>
          {title}
        </h4>
        <div className="">
          {withTitleDesc && (
            <h5 className={`${gabriela.className} text-lg font-semibold mb-2`}>
              {titleDesc}
            </h5>
          )}

          <p className="text-sm font-light lg:px-20">{desc}</p>
        </div>
      </div>
    );
  }, [withImg, withTitleDesc, titleDesc, title, desc]);

  return renderMain;
}

export default SectionTitle;
