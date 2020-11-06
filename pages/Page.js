import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Select, { createFilter } from "react-select";
import { ArrowLeft, ArrowRight } from 'react-feather'
// import Highlighter from "react-highlight-words";
import ShareButton from "./components/ShareButton";
import styles from "../styles/Page.module.css";
import { slugTitle } from "../helper";

import songs from "../songs.json";

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

export default function Page({ title = "", lyrics = "", prevSlug, nextSlug, children = null }) {
  const router = useRouter();
  function handleSelectChange(value) {
    router.push(`/judul/${slugTitle(value.label)}`);
  }

  function handleLeftClick() {
    router.push(`/judul/${prevSlug}`);
  }

  function handleRightClick() {
    router.push(`/judul/${nextSlug}`)
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
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Doding Haleluya Digital</Link>
        </h1>
      </main>
      <div className={styles.pageContent}>
        {children}
        <ShareButton title={title} lyrics={lyrics} />
      </div>
      <div className={styles.searchContainer}>
        {
          prevSlug && (
            <div className={styles.arrowBox} onClick={handleLeftClick}>
              <ArrowLeft />
            </div>
          )
        }
        <Select
          menuPlacement={"top"}
          className={styles.select}
          placeholder="Sari nomor/judul"
          options={options}
          filterOption={createFilter({ ignoreAccents: false })}
          // formatOptionLabel={formatOptionLabel}
          onChange={handleSelectChange}
          noOptionsMessage={() => "Tidak ditemukan"}
          styles={{
            singleValue: (provided) => ({
              ...provided,
              backgroundColor: "#f5feff"
            })
          }}
        />
        {
          nextSlug && (
            <div className={styles.arrowBox} onClick={handleRightClick}>
              <ArrowRight />
            </div>
          )
        }
      </div>
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
