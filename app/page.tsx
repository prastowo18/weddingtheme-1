"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Navbar,
  Hero,
  Notes,
  BrideGroom,
  CountdownDay,
  OurLoveStory,
  OurMoment,
  ShareLove,
  GuestBook,
  Footer,
  WelcomeInvitation,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [welcomeInvitation, setWelcomeInvitation] = useState<boolean>(true);
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/assets/song_fix.mp3") : undefined
  );
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    playing ? musicPlayers.current?.play() : musicPlayers.current?.pause();
    AOS.init();
  }, [playing]);

  useEffect(() => {
    musicPlayers.current?.addEventListener("ended", () => setPlaying(false));
    return () => {
      musicPlayers.current?.removeEventListener("ended", () =>
        setPlaying(false)
      );
    };
  }, []);

  const data = {
    header: {
      name: "Zein & Wiwi",
      date: "15 Juli 2023",
    },
    bride_and_groom: {
      desc: "",
      groom: {
        name: "Zein",
        fullname: "Muhammad Zein",
        desc: "Bapak M.Sjahlan - Ibu Rosminah",
        location: "Bekasi, Indonesia.",
      },
      bride: {
        name: "Wiwi",
        fullname: "Wiwi Fitriani",
        desc: "Alm. Bapak Saepudin - Ibu Rusminah",
        location: "Bekasi, Indonesia.",
      },
    },
    countdown: {
      desc: "",
      date: "",
      background: "",
      akad: {
        location_name: "Gedung Serba Guna MCB Jati Asih",
        location:
          "Jl. Koja I, RT.02/RW.016, Jatiasih, Kec. Jatiasih, Kota Bks, Jawa Barat",
        location_link:
          "https://www.google.com/maps/place/Gedung+Serba+Guna+MCB+Jati+Asih/@-6.3061877,106.9545013,16.84z/data=!4m6!3m5!1s0x2e6993dd7c6cb143:0xc796d4f1f9d3d3f4!8m2!3d-6.3062138!4d106.9573124!16s%2Fg%2F11t6_kf9w4?entry=ttu",
        date: "Sabtu, 15 Juli 2023 Jam 08.00-10.00",
      },
      resepsi: {
        location_name: "Gedung Serba Guna MCB Jati Asih",
        location:
          "Jl. Koja I, RT.02/RW.016, Jatiasih, Kec. Jatiasih, Kota Bks, Jawa Barat",
        location_link:
          "https://www.google.com/maps/place/Gedung+Serba+Guna+MCB+Jati+Asih/@-6.3061877,106.9545013,16.84z/data=!4m6!3m5!1s0x2e6993dd7c6cb143:0xc796d4f1f9d3d3f4!8m2!3d-6.3062138!4d106.9573124!16s%2Fg%2F11t6_kf9w4?entry=ttu",
        date: "Sabtu, 15 Juli 2023 Jam 11.00-17.00",
      },
      link_live_streaming: "",
      live_streaming_status: false,
    },
    our_love_story: [
      {
        image: "/assets/story2.png",
        title: "Awal Bertemu",
        date: "Juli 2022",
        story:
          "Awal kami bertemu pada bulan Juli. Untuk mulai mengobrol pada bulan Agustus. Di bulan berikutnya kami mulai chat melalui WhatsApp dan mulai pendekatan bertukar cerita satu sama lain. Sampai akhirnya kami memutuskan ke tahap yang serius.",
      },
      {
        image: "/assets/story1.png",
        title: "Mulai Berkomitmen",
        date: "Oktober 2022",
        story:
          "Pada bulan Oktober Zein mulai mengungkapkan maksud dan tujuan kelanjutan hubungan kami. Pada bulan Maret Zein membawa keluarganya untuk bersilaturahmi dan melamar saya sebagai pendamping hidupnya selamanya.",
      },
      {
        image: "/assets/story3.png",
        title: "Menikah",
        date: "Juli 2023",
        story:
          "Persiapan pernikahan kami diberi jeda selama kurang lebih 3 bulan, pada hari sabtu, 15 Juli 2023 saya dan zein meresmikan pernikahan kami. Awal baru untuk memulai kehidupan yang baru.",
      },
    ],
    our_moment: {
      desc: "",
      main_image: "",
      list_image: [],
    },
    share_love: {
      desc: "",
      list_bank: [
        {
          logo: "/assets/mandirilogo.png",
          rek_number: "1650001333757",
          bank_name: "Bank Mandiri",
          name: "Wiwi Fitriani",
          no_tlpn: "089668695521",
        },
      ],
      send_gift_location:
        "Kp. Pondok Benda Rt.05/Rw.04 No.29 gg Apotik K24, Belakang Rumah RW Didi",
    },
  };

  return (
    <main className="min-h-screen">
      {welcomeInvitation ? (
        <WelcomeInvitation
          data={data.header}
          toggleWelcomeInvitation={() => {
            setWelcomeInvitation(!welcomeInvitation);
            setPlaying(!playing);
          }}
        />
      ) : (
        <div className="relative">
          <Navbar />
          <Hero data={data.header} />
          <Notes />
          <BrideGroom data={data.bride_and_groom} />
          <CountdownDay data={data.countdown} />
          <OurLoveStory data={data.our_love_story} />
          <OurMoment />
          <ShareLove data={data.share_love} />
          <GuestBook />
          <Footer />
          <div className="fixed z-50 bottom-28 md:bottom-5 right-5">
            <button
              className="p-2 text-black bg-white rounded-full shadow-lg"
              onClick={togglePlaying}
            >
              {playing ? (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                >
                  <path fill="currentColor" d="M9 9h2v6H9V9zM15 15h-2V9h2v6z" />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
                    clipRule="evenodd"
                  />
                  <path fill="currentColor" d="M16 12l-6 4.33V7.67L16 12z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
