import { Copy } from "react-feather";
import styles from "styles/Verse.module.css";
export default function Verse(props) {
  const { text } = props;

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
    <>
      <span className={styles.verse}>
        <span>{text}</span>
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
}
