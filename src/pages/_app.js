import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.sass'
import '@/styles/Navbar.sass'
import '@/styles/Slider.sass'
import '@/styles/FirstCTA.sass'
import '@/styles/Services.sass'
import '@/styles/About.sass'
import '@/styles/Projects.sass'
import '@/styles/SecondCTA.sass'
import '@/styles/Contact.sass'
import '@/styles/Footer.sass'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
