import Page from "./Page";

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
