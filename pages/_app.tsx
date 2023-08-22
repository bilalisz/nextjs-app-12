import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../src/common/components/main-header";
import InternetStatus from "../src/common/components/InternetStatus";

import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
