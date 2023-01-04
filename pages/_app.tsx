import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Lexend } from "@next/font/google";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
};

const lexend = Lexend({ subsets: ["latin"] });

const Main = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const renderComponent = (
    <>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
  return renderComponent;
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  return (
    <main className={lexend.className}>
      <Main Component={Component} {...pageProps} />
    </main>
  );
}
