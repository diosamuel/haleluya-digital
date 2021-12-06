import { useRef } from "react";
import { Copy } from "react-feather";
import Page from "../Page";
import { slugTitle } from "../../helper";
import songs from "../../songs.json";
import parts from "../../parts.json";
import styles from "../../styles/PageContent.module.css";
import { useWindowScroll } from "react-use";

export async function getStaticPaths() {
  const paths = songs.map((song) => `/nomor/${song.number}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { number } = context.params;
  let song = songs.find((song) => song.number === Number(number));
  let songIndex = songs.findIndex((song) => song.number === Number(number));
  let songPart = parts.find(
    (part) => part.numbers.indexOf(song.number) > -1
  ).doding;
  let prevSlug = "";
  let nextSlug = "";
  if (songIndex > 0) {
    prevSlug = slugTitle(songs[songIndex - 1].title);
  }
  if (songIndex <= 504) {
    nextSlug = slugTitle(songs[songIndex + 1].title);
  }
  return {
    props: {
      prevSlug,
      nextSlug,
      song,
      songPart,
    },
  };
}

const Nomor = ({ song, songPart, prevSlug, nextSlug }) => {
  const shrunk = useRef(false);
  const { y } = useWindowScroll();
  if (y > 130 && !shrunk.current) {
    shrunk.current = true;
  }
  if (shrunk.current && y < 80) {
    shrunk.current = false;
  }
  function handleCopyClick(e) {
    var verseElement =
      e.target.parentElement.previousElementSibling ||
      e.target.parentElement.parentElement.previousElementSibling;
    var verseText = verseElement.innerText;
    verseElement.classList.add("copying");
    e.target.parentElement.setAttribute("data-title", "Copied");
    setTimeout(function () {
      e.target.parentElement.setAttribute("data-title", "Copy");
      verseElement.classList.remove("copying");
    }, 500);
    navigator.clipboard
      .writeText(verseText)
      .then(() => {})
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }
  return (
    <Page
      prevSlug={prevSlug}
      nextSlug={nextSlug}
      title={song.title}
      lyrics={song.lyrics}
    >
      <h3
        className={styles.title}
        style={{ fontSize: shrunk.current ? "20px" : "revert" }}
      >
        {song.title}
      </h3>
      <small className={styles.songPart}>Doding {songPart}</small>
      <p className={styles.lyrics}>
        {song.lyrics.split("\n\n").map((part) => {
          return (
            <>
              <span className={styles.verse}>
                <span>{part}</span>
                <span
                  data-title="Copy"
                  onClick={handleCopyClick}
                  className={styles.copyIcon}
                >
                  <Copy style={{ zIndex: 0 }} />
                </span>
              </span>

              <br />
            </>
          );
        })}
      </p>
    </Page>
  );
};

export default Nomor;
