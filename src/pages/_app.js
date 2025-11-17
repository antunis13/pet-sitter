import { ThemeProvider } from "@emotion/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastyProvider } from "../contexts/Toasty";
import theme from "@/theme";

import TemplateDefault from "../templates/Default";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastyProvider>
        <ParallaxProvider>
          <TemplateDefault>
            <main>
              <Component {...pageProps} />
            </main>
          </TemplateDefault>
        </ParallaxProvider>
      </ToastyProvider>
    </ThemeProvider>
  );
}
