import Image from "next/image";
import React, { useMemo } from "react";

export function Footer() {
  const renderMain = useMemo(() => {
    return (
      <>
        <footer className="relative flex flex-row justify-center items-center bg-[#9AA977]/60 w-full p-5 pb-24 lg:px-28 lg:py-5 lg:pb-24 text-white gap-2 -z-50">
          <div className="absolute bottom-0 left-0 hidden md:block">
            <Image
              src="/assets/left.svg"
              alt="notes-img"
              width={220}
              height={220}
              className=""
            />
          </div>
          <div className="absolute bottom-0 right-0 hidden md:block">
            <Image
              src="/assets/rightflower.svg"
              alt="notes-img"
              width={200}
              height={200}
              className=""
            />
          </div>
          <div className="absolute bottom-0 left-0 md:hidden">
            <Image
              src="/assets/left.svg"
              alt="notes-img"
              width={180}
              height={180}
              className=""
            />
          </div>
          <div className="z-50">
            <Image
              src="/assets/logo6.png"
              alt="notes-img"
              width={100}
              height={100}
              // className="mx-auto"
            />
          </div>
          <div className="z-50">
            <h5 className="text-base font-semibold uppercase">Divory</h5>
            <h6 className="text-sm">Digital Invitation Story</h6>
          </div>
        </footer>
      </>
    );
  }, []);

  return renderMain;
}

export default Footer;
