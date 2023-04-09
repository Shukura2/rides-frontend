import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import store from "../src/redux/store";
import theme from "../src/assets/base";
import TokenValidate from "../src/utils/tokenValidate";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
};

const lightTheme = createTheme(theme);

let persistor = persistStore(store);

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          {Component.auth ? (
            <TokenValidate>
              <Main Component={Component} {...pageProps} />
            </TokenValidate>
          ) : (
            <Main Component={Component} {...pageProps} />
          )}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
