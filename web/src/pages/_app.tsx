import React from "react";
import Layout from "../components/Layout"
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";
import "../styles/bg.css";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}