import { AwesomeButton } from "react-awesome-button";
import styles from "../../styles/InfoModal.module.css";
import { APP_VERSION } from "../../constants";

export default function InfoModal(props) {
  const { open, onClose } = props;
  function handleGooglePlayClick() {
    window.open(
      "https://play.google.com/store/apps/details?id=digital.haleluya.twa",
      "_blank"
    );
  }
  return (
    <aside className={styles.showInfoModal + " " + (open ? styles.shown : "")}>
      <div className={styles.appInfo}>
        <img
          className={styles.logoImage}
          src="/treble-logo.png"
          alt="Logo situs"
          width="128px"
          height="128px"
        />
        <p>
          <strong style={{ whiteSpace: "nowrap" }}>Haleluya Digital</strong> (
          <small style={{ whiteSpace: "nowrap" }}>v {APP_VERSION}</small>)
          <br />
          <small>
            Ikembangkon{" "}
            <a
              href="https://argasaragih.com"
              target="_blank"
              rel="noreferrer"
              style={{ whiteSpace: "nowrap" }}
            >
              Arga Saragih
            </a>
          </small>
        </p>
      </div>
      <div className={styles.modalText}>
        <img
          className={styles.googlePlayButton}
          src="/google-play-badge.png"
          alt="Google Play badge"
          width="323"
          height="125"
          onClick={handleGooglePlayClick}
        />
        <div className={styles.descriptionParagraph}>
          <p>
            Horas, bapa pakon inang! 👋🏻 <br />
            Goranku Arga Saragih na mambaen aplikasi on. Adong pe, bang Abner
            Saragih na mambaen video YouTube doding na adong ijon.
            <br />
            Age pe sederhana bani panorang on, sihol do uhur manambahkon
            fitur-fitur canggih ibagas aplikasi on, misalni:
          </p>
          <ul>
            <li>Not angka, not balok</li>
            <li>Transpose not</li>
            <li>
              Boi iidah <em>offline</em>
            </li>
            <li>Pakon na legan...</li>
          </ul>
          <p>
            Sihol do uhurhu, mamboan budaya Simalungun hu kancah nasional, atap
            internasional homa. Tapi ibutuhon do banggal ni uhur hita marhitei
            donasi ibagas pambahenan aplikasi on. Diatei tupa bani bapa, inang,
            haganup hasoman na domma marpartisipasi. Syalom! 😁
          </p>
          <h3>Update:</h3>
          <h4>v1.1.1</h4>
          <ul>
            <li>Tambahkon video: 3,4</li>
          </ul>
          <h4>v1.1.0</h4>
          <ul>
            <li>Tambahkon bagianni doding</li>
            <li>Tambahkon video ni doding (Hal 1 &amp; 2)</li>
          </ul>
        </div>
        <div className={styles.modalActions}>
          <AwesomeButton type="secondary" onPress={onClose}>
            Tutup
          </AwesomeButton>
          <AwesomeButton
            className={styles.donationButton}
            type="primary"
            target="_blank"
            rel="noreferrer"
            href="https://sociabuzz.com/argasaragih/tribe"
          >
            Donasi
          </AwesomeButton>
        </div>
      </div>
    </aside>
  );
}
