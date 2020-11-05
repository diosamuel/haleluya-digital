import { useEffect, useState } from "react";

export default function ShareButton({ title = "", lyrics = "" }) {
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  function handleShareClick() {
    if (window.navigator.share) {
      window.navigator.share({
        title: (title ? `${title} | ` : "") + "Doding Haleluya Digital",
        text: title
          ? `Lirik doding Haleluya No. ${title}`
          : "Doding Haleluya Digital Simalungun na bayu. Ikembangkon sada putra Simalungun.",
        url: window.location.href,
      });
    } else {
      alert("Lang dong fitur marbagi i browser on");
    }
  }
  if (windowLoaded && window.navigator.share) {
    return (
      <button
        style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
        onClick={handleShareClick}
      >
        Bagikon
      </button>
    );
  } else {
    return null;
  }
}
