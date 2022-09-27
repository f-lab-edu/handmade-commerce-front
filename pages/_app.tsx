import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "../src/shared/error/ErrorBoundary";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import { ContextProvider } from "../src/hook/GlobalContext";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface IGlobalContext {
  category?: string;
  setCategory?: Dispatch<SetStateAction<string>>;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const GlobalContext = createContext<IGlobalContext>({});
  const [category, setCategory] = useState("1");
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
            useErrorBoundary: true,
          },
        },
      })
  );

  const value = {
    category,
    setCategory,
  };

  return (
    <ContextProvider>
      <CacheProvider value={emotionCache}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ErrorBoundary>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </ErrorBoundary>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </CacheProvider>
    </ContextProvider>
  );
}

export default MyApp;
