import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export const varTourRef = "e955edeb-eefc-4be9-8116-2e99680840f2";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
