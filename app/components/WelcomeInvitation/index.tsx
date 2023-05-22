import React, { useMemo } from "react";

import { Gabriela } from "next/font/google";
import Image from "next/image";

const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

interface IProps {
  toggleWelcomeInvitation: () => void;
}
export function WelcomeInvitation(props: IProps) {
  const { toggleWelcomeInvitation } = props;
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="h-screen bg-no-repeat bg-center lg:bg-[center_top_-23rem] bg-cover"
          style={{
            backgroundImage: "url(/assets/img1.jpg)",
          }}
        >
          <div className="bg-black/50">
            <div className="flex flex-col items-center justify-center w-full h-screen gap-3 text-center py-52">
              <Image
                src="/assets/welcomeimg2.svg"
                alt="notes-img"
                width={250}
                height={250}
                className=""
              />
              <h2 className="px-2 text-base text-white">
                Hello, We Are Getting Married Save The Date
              </h2>
              <div className="">
                <h1
                  className={`text-4xl md:text-7xl text-white ${gabriela.className}`}
                >
                  Windi & Aris
                </h1>
                <h2 className="text-lg text-white">18 Februari 2028</h2>
              </div>
              <div className="">
                <h2 className="text-base italic text-white">Dear</h2>
                <h1
                  className={`text-xl font-semibold text-white ${gabriela.className}`}
                >
                  Prastowo Adi
                </h1>
              </div>
              <h2 className="px-2 text-base text-white">
                Mohon maaf apabila terdapat kesalahan dalam penulisan nama.
              </h2>
              <button
                className="px-8 py-3 text-sm text-white transition duration-150 ease-in-out border-2 rounded-lg cursor-pointer bg-black/50 border-white/80 hover:bg-white hover:text-black hover:border-2 hover:border-black"
                onClick={toggleWelcomeInvitation}
              >
                Open Invitation
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }, [toggleWelcomeInvitation]);

  return renderMain;
}

export default WelcomeInvitation;
