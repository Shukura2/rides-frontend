import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import theme from "@/assets/base";
import { DataProvider } from "@/utils/tokenValidate";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
};

const lightTheme = createTheme(theme);

const Main = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const renderComponent = (
    <>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
  return <ThemeProvider theme={lightTheme}>{renderComponent}</ThemeProvider>;
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={lightTheme}>
      {Component.auth ? (
        <DataProvider>
          <Main Component={Component} {...pageProps} />
        </DataProvider>
      ) : (
        <Main Component={Component} {...pageProps} />
      )}
    </ThemeProvider>
  );
}
