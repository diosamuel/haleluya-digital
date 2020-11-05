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
  return {
    props: {
      song,
    },
  };
}

const Judul = ({ song }) => {
  return (
    <Page title={song.title} lyrics={song.lyrics}>
      <h3>{song.title}</h3>
      <p className={styles.lyrics}>{song.lyrics}</p>
    </Page>
  );
};

export default Judul;
