import Head from "next/head";
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

export default function Page({ title = "", children }) {
  const router = useRouter();
  function handleSelectChange(value) {
    router.push(`/judul/${slugTitle(value.label)}`);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? title + " | " : ""} Haleluya Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Haleluya Digital</h1>
      </main>
      <div className={styles.pageContent}>{children}</div>
      <footer className={styles.footer}>
        <Select
          autoFocus
          menuPlacement={"top"}
          className={styles.select}
          placeholder="Cari nomor/judul"
          options={options}
          formatOptionLabel={formatOptionLabel}
          onChange={handleSelectChange}
        />
        <div>
          &copy; {new Date().getFullYear()} dikembangkan oleh&nbsp;
          <a
            href="https://argasaragih.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arga Saragih
          </a>
        </div>
      </footer>
    </div>
  );
}
