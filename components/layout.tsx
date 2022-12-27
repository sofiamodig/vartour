import Head from "next/head";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";
import { Header } from "./header/Header";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
