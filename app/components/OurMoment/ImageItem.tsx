import Image from "next/image";
import React, { useMemo } from "react";

interface IProps {
  src: string;
  alt: string;
}
export function ImageItem(props: IProps) {
  const { src, alt } = props;
  const renderMain = useMemo(() => {
    return (
      <a href={src}>
        <div className="shadow-lg">
          <Image
            src={src}
            alt={alt}
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
      </a>
    );
  }, [src, alt]);

  return renderMain;
}

export default ImageItem;
