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
            desc="Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi,
          kami harapkan kedatangan para tamu undangan agar menjalankan
          protokol yang berlaku."
          />
          <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2 md:px-20">
            <NotesItem
              src="/assets/notes2.png"
              alt="notes-img"
              title="Wajib Menggunakan Masker"
              desc="Masker merupakan penghalang sederhana yang bisa membantu mencegah percikan pernapasan yang berisi virus dari orang lain masuk ke dalam tubuh kamu."
            />
            <NotesItem
              src="/assets/washing-hand.png"
              alt="notes-img"
              title="Mencuci Tangan dan Memakai Handsanitizer"
              desc="Mencuci tangan merupakan gaya hidup sehat yang tentunya bisa melindungi dari beragam penyakit-penyakit dan untuk lebih menjaga kebersihan bisa menggunakan Handsanitizer."
            />
            <NotesItem
              src="/assets/hands.png"
              alt="notes-img"
              title="Menggunakan salam namastee sebagai ganti berjabat tangan"
              desc="Salam Namaste merupakan gestur tubuh mengatupkan kedua telapak tangan di dada, yang merupakan simbol penghormatan terhadap seseorang yang dijumpai."
            />
            <NotesItem
              src="/assets/social-distancing.png"
              alt="notes-img"
              title="Saling Menjaga Jarak di Dalam Acara"
              desc="Dengan menjaga jarak, kemungkinan kamu menghirup tetesan dan bersentuhan dengan permukaan yang terkontaminasi dan orang yang terinfeksi di luar rumah pun turut berkurang."
            />
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default Notes;
