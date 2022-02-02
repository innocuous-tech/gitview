import Head from 'next/head';
import { Box } from '~/components/Box';

export default function Missing() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Box as="p">This repository does not exist!</Box>
    </>
  );
}
