import React from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Suitmedia</title>
        <meta name="description" content="Component Website." />
        <meta name="author" content="@gagaalp" />
        <meta property="og:title" content="Suitmedia" key="ogtitle" />+{" "}
        <meta property="og:description" content="Component Website." key="ogdesc" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.Fragment>
  );
}
