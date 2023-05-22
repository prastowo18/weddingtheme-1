import React, { useMemo } from "react";

import SectionTitle from "../SectionTitle";

export function GuestBook() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="guestbook"
          className="flex flex-col items-center w-full pt-20 pb-32 select-none px-7 lg:px-28"
        >
          <SectionTitle
            withImg
            title="Guest Book"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto unde
          asperiores accusamus doloremque?"
          />

          <form className="w-full p-5 mt-10 md:p-16 bg-[#9AA977]/60 rounded-md md:w-2/3 lg:w-1/2 shadow-md ">
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-white">
                Nama
              </label>
              <input
                className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                // placeholder="Nama"
              />
            </div>
            <div className="">
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-white">
                  Kedatangan
                </label>
                <div className="relative inline-block w-full">
                  <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option>Hadir</option>
                    <option>Tidak Hadir</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <label className="block mb-1 font-semibold text-white">
                  Jumlah
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nama"
                  type="number"
                  // placeholder="Nama"
                />
              </div>
            </div>
            <div className="my-4">
              <label className="block mb-1 font-semibold text-white">
                Ucapan/Doa
              </label>
              <textarea
                className="w-full h-32 px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="nama"
                // placeholder="Nama"
              />
            </div>
            <button
              className="px-7 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-sm hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer uppercase"
              type="submit"
            >
              Kirim
            </button>
          </form>
          <div className="relative w-full p-5 mt-12 border-y-2 border-y-[#9AA977]/80 rounded-lg shadow-md md:w-2/3 lg:w-1/2 overflow-auto">
            <div className="relative flex flex-col w-full mx-auto overflow-y-auto h-72 scrollbar-thin scrollbar-thumb-[#9AA977]/60 scrollbar-track-[#9AA977]/30 px-5">
              {Array(5)
                .fill(undefined)
                .map((item: any, idx: number) => (
                  <div className="pb-5" key={idx}>
                    <div className="flex flex-col p-4 bg-[#9AA977]/20 rounded-lg">
                      <div className="flex flex-col md:gap-3 md:flex-row md:items-center">
                        <p className="text-sm font-semibold">
                          Prastowo Adi Nugroho
                        </p>
                        <div className="text-xs font-semibold text-red-500 md:px-4 md:py-1 md:text-center md:bg-white md:rounded-full">
                          Tidak Hadir
                        </div>
                      </div>
                      <p className="mt-2 text-xs md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem sequi, adipisci cupiditate laborum
                        consequatur suscipit?
                      </p>
                      <p className="mt-3 text-xs text-gray-500">
                        22 Januari 2023 09:36
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default GuestBook;
