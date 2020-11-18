import { useRef } from 'react'
import Page from "../Page";
import { slugTitle } from "../../helper";
import songs from "../../songs.json";
import styles from "../../styles/PageContent.module.css";
import { useWindowScroll } from 'react-use'

export async function getStaticPaths() {
  const paths = songs.map((song) => `/judul/${slugTitle(song.title)}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let song = songs.find((song) => slugTitle(song.title) === slug);
  let songIndex = songs.findIndex((song) => slugTitle(song.title) === slug);
  let prevSlug = "";
  let nextSlug = "";
  if (songIndex > 0) {
    prevSlug = slugTitle(songs[songIndex - 1].title)
  }
  if (songIndex <= 504) {
    nextSlug = slugTitle(songs[songIndex + 1].title)
  }
  return {
    props: {
      prevSlug,
      nextSlug,
      song,
    },
  };
}

const Judul = ({ song, prevSlug, nextSlug }) => {
  const shrunk = useRef(false);
  const { y } = useWindowScroll();
  if (y > 130 && !shrunk.current) {
    shrunk.current = true;
  }
  if (shrunk.current && y < 80) {
    shrunk.current = false;
  }
  return (
    <Page prevSlug={prevSlug} nextSlug={nextSlug} title={song.title} lyrics={song.lyrics}>
      <h3 className={styles.title} style={{ fontSize: shrunk.current ? '20px' : 'revert'}}>{song.title}</h3>
      <p className={styles.lyrics}>{song.lyrics}</p>
    </Page>
  );
};

export default Judul;
