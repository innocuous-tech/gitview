import Head from 'next/head';
import Link from 'next/link';
import { Box } from '~/components/Box';

export default function Missing() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$12', textAlign: 'center' }}>
        <Box as="p">This repository does not exist!</Box>

        <Link href={'/'} passHref>
          <Box as="a" css={{ mt: '$24', width: '100%' }}>
            Go back to the home page
          </Box>
        </Link>
      </Box>
    </>
  );
}
