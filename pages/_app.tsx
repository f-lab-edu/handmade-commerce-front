import React, { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from '../src/shared/error/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({defaultOptions: {
    queries: {
      retry:0,
      suspense: true,
      useErrorBoundary: true
    },
  },}))

  return (
    
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
    
  )
}

export default MyApp
