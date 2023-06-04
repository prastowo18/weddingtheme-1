import React, { useMemo } from "react";

import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export function NotesItem(props: IProps) {
  const { src, alt, title, desc } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center gap-5 md:text-center">
        <div className="">
          <Image
            src={src}
            alt={alt}
            className="mx-auto"
            width={50}
            height={50}
          />
        </div>
        <div className="text-center md:px-3 lg:px-10 md:pb-10">
          <h5 className="mb-1 text-sm font-semibold tracking-wide">{title}</h5>
          <p className="text-sm font-light">{desc}</p>
        </div>
      </div>
    );
  }, [src, alt, title, desc]);

  return renderMain;
}

export default NotesItem;
