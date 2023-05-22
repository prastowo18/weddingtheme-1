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
        <div className="hidden md:block">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className="w-1/2 mx-auto"
          />
        </div>
        <div className="md:px-3 lg:px-10 md:pb-10">
          <h5 className="mb-1 text-sm font-semibold tracking-wide">{title}</h5>
          <p className="text-sm font-light">{desc}</p>
        </div>
      </div>
    );
  }, [src, alt, title, desc]);

  return renderMain;
}

export default NotesItem;
