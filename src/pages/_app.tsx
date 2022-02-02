import type { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { globalCSSReset, globalStyles } from '~/stitches.config';
import { Box } from '~/components/Box';
import Head from 'next/head';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Box
        as="main"
        css={{
          backgroundColor: '$plum1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          minH: '100vh',
          w: '100%',
          gap: '$32',
        }}
      >
        {children}
      </Box>
    </>
  );
}

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function App({ Component, pageProps }: AppProps) {
  globalCSSReset();
  globalStyles();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
