/** @format */

import { NextPage } from "next";
import Head from "next/head";

type Props = {};

const DocHead: NextPage = (props: Props) => {
  return (
    <Head>
      <title>Galleria</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/assets/favicon.ico" />
      <meta name="title" content="Galleria" />
      <meta name="theme-color" content="#14f4f4" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Aesthetic and minimal images collection. Project by Yash Sonalia"
      />
      <meta name="keywords" content="Minimal, Image, Aesthetic, Wallpaper, Free, Carousel" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Yash Sonalia" />

      <link rel="apple-touch-icon" href="favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default DocHead;
