import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ArticleProvider from '@/contexts/ArticleProvider';
import { globalStyles } from '@/ui/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
   globalStyles();
   const [queryClient] = React.useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  staleTime: 20 * 1000,
               },
            },
         })
   );

   return (
      <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <ArticleProvider>
               <Component {...pageProps} />
            </ArticleProvider>
            <ReactQueryDevtools initialIsOpen={false} />
         </Hydrate>
      </QueryClientProvider>
   );
}

export default MyApp;
