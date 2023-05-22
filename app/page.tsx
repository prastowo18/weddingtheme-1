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

export default function Home() {
  const [welcomeInvitation, setWelcomeInvitation] = useState<boolean>(true);
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/assets/song.mp3") : undefined
  );
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    playing ? musicPlayers.current?.play() : musicPlayers.current?.pause();
  }, [playing]);

  useEffect(() => {
    musicPlayers.current?.addEventListener("ended", () => setPlaying(false));
    return () => {
      musicPlayers.current?.removeEventListener("ended", () =>
        setPlaying(false)
      );
    };
  }, []);

  return (
    <main className="min-h-screen">
      {welcomeInvitation ? (
        <WelcomeInvitation
          toggleWelcomeInvitation={() => {
            setWelcomeInvitation(!welcomeInvitation);
            setPlaying(!playing);
          }}
        />
      ) : (
        <div className="relative">
          <Navbar />
          <Hero />
          <Notes />
          <BrideGroom />
          <CountdownDay />
          <OurLoveStory />
          <OurMoment />
          <ShareLove />
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
