import React, { useCallback, useMemo, useState } from "react";
import useGetList from "../../hooks/useGetList";
import useCeateList from "../../hooks/useCeateList";
import SectionTitle from "../SectionTitle";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { toast } from "react-toastify";

export function GuestBook() {
  const searchParams = useSearchParams();
  const paramsName = searchParams.get("to");
  const mutation = useCeateList();
  const dataTable = useGetList();
  const { data, isError, isFetching, isLoading, refetch } = dataTable;
  const nameIsExsist = data?.data.find((x: any) => x.nama === paramsName);

  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = useCallback((val: any) => {
    val.kedatangan = val.kedatangan === "Hadir" ? true : false;
    val.nama = paramsName;
    setLoading(true);
    mutation.mutate(
      {
        ...val,
      },
      {
        onSuccess(data: any) {
          if (data) {
            toast.success("Berhasil tambah Guest Book");
            refetch();
            setLoading(false);
          }
        },
        onError(err: any) {
          setLoading(false);
          console.log("err>>response>>submit", err);
        },
      }
    );
  }, []);

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
            desc="Silahkan konfirmasi untuk kedatangan."
          />

          {nameIsExsist ? null : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-5 mt-10 md:p-16 bg-[#9AA977]/60 rounded-md md:w-2/3 lg:w-1/2 shadow-md"
            >
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-white">
                  Nama
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline disabled:text-gray-500"
                  id="nama"
                  type="text"
                  disabled
                  value={paramsName ?? ""}
                // placeholder="Nama"
                />
              </div>
              <div className="">
                <div className="mb-4">
                  <label className="block mb-1 font-semibold text-white">
                    Kedatangan
                  </label>
                  <div className="relative inline-block w-full">
                    <select
                      {...register("kedatangan", {})}
                      className="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
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
                    {...register("jumlah", {})}
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
                  {...register("ucapan", {})}
                // placeholder="Nama"
                />
              </div>
              {loading ? (
                <svg
                  className="w-8 h-8 mt-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#9AA977"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-80"
                    fill="#FAFAFA"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <button
                  className="px-7 py-2 bg-[#9AA977]/80 text-white border-2 border-white/80 rounded-lg text-sm hover:bg-white hover:text-[#9AA977]/80 hover:border-2 hover:border-[#9AA977]/80 transition duration-150 ease-in-out cursor-pointer uppercase"
                  type="submit"
                >
                  Kirim
                </button>
              )}
            </form>
          )}
          <div className="relative w-full p-5 mt-12 border-y-2 border-y-[#9AA977]/80 rounded-lg shadow-md md:w-2/3 lg:w-1/2 overflow-auto">
            {isLoading ? (
              <div className="w-full">
                <svg
                  className="w-8 h-8 mx-auto mt-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#9AA977"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-80"
                    fill="#FAFAFA"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className={`relative flex flex-col w-full mx-auto overflow-y-auto ${nameIsExsist ? "h-90" : "h-72"
                  } scrollbar-thin scrollbar-thumb-[#9AA977]/60 scrollbar-track-[#9AA977]/30 px-2`}
              >
                {data?.data.map((item: any, idx: number) => (
                  <div className="pb-5" key={idx}>
                    <div className="flex flex-col p-4 bg-[#9AA977]/20 rounded-lg">
                      <div className="flex flex-col md:gap-3 md:flex-row md:items-center">
                        <p className="text-sm font-semibold">{item.nama}</p>
                        <div
                          className={`text-xs font-semibold ${item.kedatangan ? "text-green-500" : "text-red-500"
                            }  md:px-4 md:py-1 md:text-center md:bg-white md:rounded-full`}
                        >
                          {item.kedatangan ? "Hadir" : "Tidak Hadir"}
                        </div>
                      </div>
                      <p className="mt-2 text-xs md:text-sm">{item.ucapan}</p>
                      <p className="mt-3 text-xs text-gray-500">
                        {/* 22 Januari 2023 09:36 */}
                        {moment(item?.createdAt).format("DD MMM YYYY HH:mm")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </>
    );
  }, [data]);

  return renderMain;
}

export default GuestBook;
