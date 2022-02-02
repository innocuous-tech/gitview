import type { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { globalCSSReset, globalStyles } from '~/stitches.config';

function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
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
