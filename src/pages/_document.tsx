import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '~/stitches.config';

/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
