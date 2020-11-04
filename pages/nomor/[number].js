import Page from "../Page";
import songs from "../../songs.json";
import styles from "../../styles/PageContent.module.css";

export async function getStaticPaths() {
  const paths = songs.map((song) => `/nomor/${song.number}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { number } = context.params;
  let song = songs.find((song) => song.number === Number(number));
  return {
    props: {
      song,
    },
  };
}

const Nomor = ({ song }) => {
  return (
    <Page title={song.title}>
      <h3>{song.title}</h3>
      <p className={styles.lyrics}>{song.lyrics}</p>
    </Page>
  );
};

export default Nomor;
