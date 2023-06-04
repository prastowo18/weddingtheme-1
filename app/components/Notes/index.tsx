import React, { useMemo } from "react";

import NotesItem from "./NotesItem";
import SectionTitle from "../SectionTitle";

export function Notes() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full pt-20 px-7 lg:px-28 lg:pt-28"
        >
          <SectionTitle
            title="Notes"
            withTitleDesc
            titleDesc="Protokol Kesehatan"
            desc="Tanpa mengurangi rasa hormat meski masa pandemi telah usai, kami tetap mengimbau agar para tamu undangan tetap mematuhi protokol bersama, seperti:"
          />
          <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2 md:px-20">
            <div data-aos="fade-up">
              <NotesItem
                src="/assets/notes2.png"
                alt="notes-img"
                title="Menggunakan Masker"
                desc="Para tamu undangan diharapkan membawa atau memakai masker masing-masing."
              />
            </div>
            <div data-aos="fade-up">
              <NotesItem
                src="/assets/washing-hand.png"
                alt="notes-img"
                title="Mencuci Tangan"
                desc="Para tamu undangan diharapkan sudah mencuci tangan sebelum memasuki tempat pernikahan."
              />
            </div>
            <div data-aos="fade-up">
              <NotesItem
                src="/assets/hands.png"
                alt="notes-img"
                title="Mengurangi Kontak Fisik"
                desc="Tetap kurangi kontak fisik antar tamu undangan."
              />
            </div>
            <div data-aos="fade-up">
              <NotesItem
                src="/assets/social-distancing.png"
                alt="notes-img"
                title="Jaga Jarak"
                desc="Tetap menjaga jarak antara tamu undangan dengan tidak berdesak-desakan."
              />
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default Notes;
