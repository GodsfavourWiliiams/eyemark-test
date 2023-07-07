import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const router = useRouter();
  const { pathname } = router;
  const { drawer_open } = router.query;
  const param = drawer_open as string;

  return (
    <div className="font">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="../public/logo.svg" />
      </Head>
      <Header />
      <div className={`${pathname === "/" ? "py-[200px]" : "py-28"}`}>
        {
          // If the drawer_open is true, display the map
          param === "true" ? <Map /> : children
        }
      </div>

      {
        // If the pathname is equal to the root path, display the footer
        pathname === "/" && <Footer />
      }
    </div>
  );
};

export default Layout;
