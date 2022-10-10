import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import { SearchProvider } from "../src/context/SearchContext";
import { FavoriteProvider } from "../src/context/FavoriteContext";
import AsyncBoundary from "../src/shared/async/AsyncBoundary";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            // suspense: true,
            useErrorBoundary: true,
          },
        },
      })
  );
  return (
    <SearchProvider>
      <FavoriteProvider>
        <CacheProvider value={emotionCache}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <AsyncBoundary>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Component {...pageProps} />
                </ThemeProvider>
              </AsyncBoundary>
            </Hydrate>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </CacheProvider>
      </FavoriteProvider>
    </SearchProvider>
  );
}

export default MyApp;
