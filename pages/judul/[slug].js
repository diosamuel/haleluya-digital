import Page from "../Page";
import { slugTitle } from "../../helper";
import songs from "../../songs.json";
import styles from "../../styles/PageContent.module.css";

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
  console.log(prevSlug)
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
  return (
    <Page prevSlug={prevSlug} nextSlug={nextSlug} title={song.title} lyrics={song.lyrics}>
      <h3>{song.title}</h3>
      <p className={styles.lyrics}>{song.lyrics}</p>
    </Page>
  );
};

export default Judul;
