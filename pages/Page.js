import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Select from "react-select";
import Highlighter from "react-highlight-words";
import styles from "../styles/Page.module.css";
import { slugTitle } from "../helper";

import songs from "../songs.json";

const options = songs.map((song) => ({
  value: song.number,
  label: song.title,
}));

function formatOptionLabel({ label }, { inputValue }) {
  return (
    <Highlighter
      highlightStyle={{ backgroundColor: "unset", fontWeight: 700 }}
      searchWords={[inputValue]}
      textToHighlight={label}
    />
  );
}

export default function Page({ title = "", lyrics = "", children = null }) {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  function handleSelectChange(value) {
    router.push(`/judul/${slugTitle(value.label)}`);
  }
  function handleShareClick() {
    if (window.navigator.share) {
      window.navigator.share({
        title: (title ? `${title} | ` : "") + "Doding Haleluya Digital",
        text: lyrics
          ? lyrics
          : "Doding Haleluya Digital Simalungun na bayu. Ikembangkon sada putra Simalungun.",
        url: window.location.href,
      });
    } else {
      alert("Lang dong fitur marbagi i browser on");
    }
  }
  if (children === null) {
    children = (
      <p className={styles.contentPlaceholder}>
        Ketik judul atap nomor dodingni i kotak pansarian ase ididah lirik
        doding ai
      </p>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? title + " | " : ""} Doding Haleluya Digital</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Doding Haleluya Digital</Link>
        </h1>
      </main>
      <div className={styles.pageContent}>
        {children}
        {windowLoaded && window.navigator.share && (
          <button className={styles.shareButton} onClick={handleShareClick}>
            Bagikon
          </button>
        )}
      </div>
      <Select
        menuPlacement={"top"}
        className={styles.select}
        maxMenuHeight={500}
        placeholder="Sari nomor/judul"
        options={options}
        formatOptionLabel={formatOptionLabel}
        onChange={handleSelectChange}
      />
      <footer className={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} ikembangkon&nbsp;
          <a
            href="https://argasaragih.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            abang Saragih
          </a>
        </div>
      </footer>
    </div>
  );
}
