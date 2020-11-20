import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Select, { createFilter } from "react-select";
import { ArrowLeft, ArrowRight, Info } from "react-feather";
import { useSwipeable } from "react-swipeable";
import { useLockBodyScroll } from "react-use";
// import Highlighter from "react-highlight-words";
import ShareButton from "./components/ShareButton";
import styles from "../styles/Page.module.css";
import { slugTitle } from "../helper";

import songs from "../songs.json";
import { AwesomeButton } from "react-awesome-button";

const options = songs.map((song) => ({
  value: song.number,
  label: song.title,
}));

// function formatOptionLabel({ label }, { inputValue }) {
//   return (
//     <Highlighter
//       highlightStyle={{ backgroundColor: "unset", fontWeight: 700 }}
//       searchWords={[inputValue]}
//       textToHighlight={label}
//     />
//   );
// }

export default function Page({
  title = "",
  lyrics = "",
  prevSlug,
  nextSlug,
  awesomeButtonStyles,
  children = null,
}) {
  const [selectValue, setSelectValue] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  useLockBodyScroll(showInfo);
  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlug && router.push(`/judul/${nextSlug}`),
    onSwipedRight: () => prevSlug && router.push(`/judul/${prevSlug}`),
  });

  function handleSelectChange(value) {
    router.push(`/judul/${slugTitle(value.label)}`);
    setSelectValue(null);
  }

  function handleLeftClick() {
    router.push(`/judul/${prevSlug}`);
  }

  function handleRightClick() {
    router.push(`/judul/${nextSlug}`);
  }

  function handleInfoClick() {
    setShowInfo(!showInfo);
  }

  function handleCloseInfo() {
    setShowInfo(false);
  }
  if (children === null) {
    children = (
      <p className={styles.contentPlaceholder}>
        Ketik judul atap nomor doding i kotak pansarian ase taridah lirikni
        doding ai
      </p>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? title + " | " : ""} Doding Haleluya Digital</title>
        <link
          rel="canonical"
          href={
            `https://haleluya.digital` +
            (title ? `/judul/${slugTitle(title)}` : "")
          }
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Doding Haleluya Digital</Link>
        </h1>
      </main>
      <div {...handlers} className={styles.pageContent}>
        {children}
        <div className={styles.contentAction}>
          <ShareButton title={title} />
          {title !== "" && (
            <AwesomeButton
              cssModule={awesomeButtonStyles}
              type="primary"
              target="_blank"
              rel="noreferrer"
              href="https://sociabuzz.com/argasaragih/tribe"
            >
              Donasi
            </AwesomeButton>
          )}
        </div>
      </div>
      <div className={styles.searchContainer}>
        {prevSlug && (
          <div className={styles.arrowBox} onClick={handleLeftClick}>
            <ArrowLeft />
          </div>
        )}
        <Select
          aria-label="Kolom pencarian"
          menuPlacement={"top"}
          className={styles.select}
          placeholder="Sari nomor/judul"
          options={options}
          filterOption={createFilter({ ignoreAccents: false })}
          // formatOptionLabel={formatOptionLabel}
          onChange={handleSelectChange}
          value={selectValue}
          noOptionsMessage={() => "Tidak ditemukan"}
        />
        {nextSlug && (
          <div className={styles.arrowBox} onClick={handleRightClick}>
            <ArrowRight />
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <div className={styles.infoButton} onClick={handleInfoClick}>
          <Info />
        </div>
        <div>Copyright &copy; {new Date().getFullYear()} Haleluya Digital</div>
      </footer>
      <aside
        className={styles.showInfoModal + " " + (showInfo ? styles.shown : "")}
      >
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="/treble-logo.png"
            alt="Logo situs"
            width="128px"
            height="128px"
          />
        </div>
        <h2>Haleluya Digital</h2>
        <p>
          Ikembangkon{" "}
          <a href="https://argasaragih.com" target="_blank" rel="noreferrer">
            abang Saragih
          </a>
        </p>
        <div className={styles.descriptionParagraph}>
          <p>
            Horas, bapa pakon inang! 👋🏻 <br />
            Goranku Arga Saragih na mambaen aplikasi on.
            <br />
            Age pe sederhana bani panorang on, sihol do uhur manambahkon
            fitur-fitur canggih ibagas aplikasi on, misalni:
          </p>
          <ul>
            <li>Not angka, not balok</li>
            <li>Transpose not</li>
            <li>Tanpa mamorluhon internet</li>
            <li>Pakon na legan...</li>
          </ul>
          <p>
            Sihol do uhurhu, mamboan budaya Simalungun hu kancah nasional, atap
            internasional homa. Tapi ibutuhon do banggal ni uhur hita marhitei
            donasi ibagas pambahenan aplikasi on. Diatei tupa bani bapa, inang,
            haganup hasoman na domma marpartisipasi. Syalom! 😁
          </p>
        </div>
        <AwesomeButton
          className={styles.donationButton}
          type="primary"
          target="_blank"
          rel="noreferrer"
          href="https://sociabuzz.com/argasaragih/tribe"
        >
          Donasi
        </AwesomeButton>
        <button onClick={handleCloseInfo}>Tutup</button>
      </aside>
    </div>
  );
}
