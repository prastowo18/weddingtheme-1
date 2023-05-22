import React, { useMemo } from "react";
import Image from "next/image";

export function Navbar() {
  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="fixed z-50 w-full bottom-2">
          <div className="w-5/6 md:w-[40%] lg:w-3/12 mx-auto flex flex-row items-center justify-center gap-5 px-2 py-3 rounded-full bg-[#9AA977]/90">
            <a className="" href="#hero">
              <Image
                src="/assets/couple.png"
                alt="notes-img"
                width={40}
                height={40}
                className=""
              />
            </a>
            <a className="" href="#countdownday">
              <Image
                src="/assets/calendar.png"
                alt="notes-img"
                width={40}
                height={40}
                className=""
              />
            </a>
            <a className="" href="#ourlovestory">
              <Image
                src="/assets/camera.png"
                alt="notes-img"
                width={40}
                height={40}
                className=""
              />
            </a>
            <a className="" href="#guestbook">
              <Image
                src="/assets/mail.png"
                alt="notes-img"
                width={40}
                height={40}
                className=""
              />
            </a>
            <a className="" href="#sharelove">
              <Image
                src="/assets/giftbox.png"
                alt="notes-img"
                width={40}
                height={40}
                className=""
              />
            </a>
          </div>
        </nav>
      </>
    );
  }, []);

  return renderMain;
}

export default Navbar;
