import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Share2 } from "react-feather";

export default function ShareButton({ title = "" }) {
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  function handleShareClick() {
    if (window.navigator.share) {
      window.navigator.share({
        title: (title ? `${title} | ` : "") + "Doding Haleluya Digital",
        text: title
          ? `Lirik doding Haleluya No. ${title} | Dukung karya anak Simalungun.`
          : "Horas! Dukung karya anak Simalungun.",
        url: window.location.href,
      });
    } else {
      alert("Lang dong fitur marbagi i browser on");
    }
  }
  if (windowLoaded && window.navigator.share) {
    return (
      <AwesomeButton
        style={{
          marginRight: "0.5rem",
          marginBottom: "1rem",
          zIndex: 1,
        }}
        onPress={handleShareClick}
      >
        <Share2 />
        &nbsp;Bagihon
      </AwesomeButton>
    );
  } else {
    return null;
  }
}
