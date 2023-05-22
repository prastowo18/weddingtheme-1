import React, { useMemo } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function CountdownDay() {
  const weedingDate = new Date("2023-06-21T00:00:00.147712+07:00").getTime();

  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="countdownday"
          className={`${gabriela.className} flex flex-col items-center w-full pt-10 px-7 lg:px-28 lg:pb-28 bg-[#9AA977]/60 text-white pb-28`}
        >
          <div className="flex flex-col w-full gap-2 text-center md:w-2/3">
            <div className="">
              <Image
                src="/assets/countdownsectionimg.svg"
                alt="notes-img"
                width={130}
                height={130}
                className="mx-auto"
              />
            </div>
            <h4 className={`text-xl tracking-widest`}>Countdown To</h4>
            <h4 className={` text-4xl md:text-5xl tracking-widest`}>
              Our Happy Day
            </h4>
            <p className="mt-2 text-sm font-light md:text-lg lg:px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laborum voluptatum animi rerum alias nulla architecto unde
              asperiores accusamus doloremque?
            </p>

            {/* Countdown Time */}
            <CountdownTimer targetDate={weedingDate} />

            {/* Wedding Information */}
            <div className="w-full h-full bg-white rounded-tl-full rounded-tr-full shadow-lg lg:w-3/4 md:mx-auto">
              <div
                className="w-full h-64 bg-bottom bg-cover rounded-tl-full rounded-tr-full md:h-80"
                style={{
                  backgroundImage: "url(/assets/weedinghero.jpg)",
                }}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 rounded-tl-full rounded-tr-full">
                  <div
                    className={`text-center mt-5 lg:w-2/3 p-3 md:p-5 lg:p-0`}
                  >
                    <span className="text-sm tracking-widest text-gray-200 uppercase md:text-lg">
                      Where & When
                    </span>
                    <h1 className="text-3xl font-bold tracking-widest text-gray-100 md:text-4xl">
                      Wedding Day
                    </h1>
                    <p className="max-w-3xl mt-1 text-xs text-gray-300 md:text-sm md:mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis incidunt vitae facere corrupti facilis saepe
                      error eius? Voluptatum, assumenda inventore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Akad */}
              <div className="px-5 py-10 md:px-10 lg:px-16">
                <div className="flex flex-row items-center pb-1 border-b-2 border-b-[#9AA977]/80">
                  <div className="p-1">
                    <Image
                      src="/assets/weddingrings.png"
                      alt="notes-img"
                      width={50}
                      height={50}
                      // className="mx-auto"
                    />
                  </div>
                  <div className="text-[#9AA977]/80 p-1 text-left">
                    <h3 className={`${gabriela.className} text-xl`}>Akad</h3>
                    <h5 className={`text-sm`}>Hotel Marriot</h5>
                  </div>
                </div>
                <div className="flex gap-3 text-[#9AA977]/80 mt-5 items-center">
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h16zm0-9H4V7a1 1 0 011-1h2v1a1 1 0 002 0V6h6v1a1 1 0 002 0V6h2a1 1 0 011 1z" />
                    </svg>
                  </div>
                  <h5 className={`text-sm md:text-[15px] text-left`}>
                    Minggu, 25 September 2029
                  </h5>
                </div>
                <div className="flex gap-3 text-[#9AA977]/80 mt-4 items-center">
                  <div className="">
                    <svg
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
                    </svg>
                  </div>
                  <h5 className={`text-sm md:text-[15px] text-left`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure quia quisquam nemo quod exercitationem molestias.
                  </h5>
                </div>
                <div className="flex gap-2 mt-10 text-[#9AA977]/80">
                  <button className="px-2 py-2 md:px-3 text-xs md:text-sm border-2 border-[#9AA977]/80 rounded-lg hover:bg-[#9AA977]/80 hover:text-white hover:border-white transition duration-150 ease-in-out">
                    Add To Calender
                  </button>
                  <a
                    href="https://www.google.com/maps"
                    className="px-2 py-2 md:px-3 text-xs md:text-sm border-2 border-[#9AA977]/80 rounded-lg hover:bg-[#9AA977]/80 hover:text-white hover:border-white transition duration-150 ease-in-out"
                    target="_blank"
                  >
                    Open Map
                  </a>
                </div>
              </div>

              {/* Resepsi */}
              <div className="px-5 py-10 md:px-10 lg:px-16">
                <div className="flex flex-row items-center pb-1 border-b-2 border-b-[#9AA977]/80">
                  <div className="p-1">
                    <Image
                      src="/assets/arch.png"
                      alt="notes-img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-[#9AA977]/80 p-1 text-left">
                    <h3 className={`${gabriela.className} text-xl`}>
                      Resepsi Pernikahan
                    </h3>
                    <h5 className={`text-sm`}>Hotel Marriot</h5>
                  </div>
                </div>
                <div className="flex gap-3 text-[#9AA977]/80 mt-5 items-center">
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h16zm0-9H4V7a1 1 0 011-1h2v1a1 1 0 002 0V6h6v1a1 1 0 002 0V6h2a1 1 0 011 1z" />
                    </svg>
                  </div>
                  <h5 className={`text-sm md:text-[15px] text-left`}>
                    Minggu, 25 September 2029
                  </h5>
                </div>
                <div className="flex gap-3 text-[#9AA977]/80 mt-4 items-center">
                  <div className="">
                    <svg
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
                    </svg>
                  </div>
                  <h5 className={`text-sm md:text-[15px] text-left`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure quia quisquam nemo quod exercitationem molestias.
                  </h5>
                </div>
                <div className="flex gap-2 mt-10 text-[#9AA977]/80">
                  <button className="px-2 py-2 md:px-3 text-xs md:text-sm border-2 border-[#9AA977]/80 rounded-lg hover:bg-[#9AA977]/80 hover:text-white hover:border-white transition duration-150 ease-in-out">
                    Add To Calender
                  </button>
                  <a
                    href="https://www.google.com/maps"
                    className="px-2 py-2 md:px-3 text-xs md:text-sm border-2 border-[#9AA977]/80 rounded-lg hover:bg-[#9AA977]/80 hover:text-white hover:border-white transition duration-150 ease-in-out"
                    target="_blank"
                  >
                    Open Map
                  </a>
                </div>
              </div>

              <div className="px-5 py-20 md:px-10 lg:px-16 text-[#9AA977]/80">
                <h3 className={`${mrDehaviland.className} text-4xl`}>
                  Live Streaming
                </h3>
                <p className="px-3 my-5 text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, ratione. Explicabo officia aliquam facilis ipsum?
                </p>
                <button className="flex gap-2 items-center mx-auto px-2 py-2 md:px-3 text-xs md:text-sm border-2 bg-[#9AA977]/80 text-white border-white rounded-lg hover:bg-white hover:text-[#9AA977]/80 hover:border-[#9AA977]/80 transition duration-150 ease-in-out">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 01.215.062l4.355 2.772a.4.4 0 010 .674L7.615 15.11A.4.4 0 017 14.77V9.23a.4.4 0 01.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z" />
                  </svg>
                  <p>Join Live</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }, [weedingDate]);

  return renderMain;
}

export default CountdownDay;
