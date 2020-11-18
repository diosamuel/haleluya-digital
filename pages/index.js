// import { useEffect, useRef } from "react";
import Page from "./Page";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-blue.css";

export default function Home() {
  // const installPromptRef = useRef(null);
  // useEffect(() => {
  //   window.addEventListener("beforeinstallprompt", (e) => {
  //     // Prevent the mini-infobar from appearing on mobile
  //     e.preventDefault();
  //     // Stash the event so it can be triggered later.
  //     installPromptRef.current = e;
  //     // Update UI notify the user they can install the PWA
  //     // showInstallPromotion();
  //     console.log(installPromptRef.current);
  //     alert("You can install this to your phone");
  //   });
  // }, []);
  return <Page />;
}
