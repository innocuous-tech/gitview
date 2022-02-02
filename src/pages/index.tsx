import Head from 'next/head';
import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

export default function Home() {
  // TODO: Use `useRouter` to read error query params and render form-level error message!

  return (
    <>
      <Head>
        <title>gitview</title>
        <meta name="description" content="See recent commits for a repository" />
      </Head>

      <Box as="section" css={{ color: '$mauve12', textAlign: 'center' }}>
        <Box as="h1" css={{ mb: '$12' }}>
          gitview
        </Box>

        <Box as="p">View a repository&apos;s list of commits!</Box>
      </Box>

      <Box as="form" action="/api/query" method="POST">
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$16',
            w: 280,
            '& input': {
              h: '42px',
              w: '100%',
            },
          }}
        >
          <Input id="orgName" label="User or Organization Name" required />
          <Input id="repoName" label="Repository Name" required />
        </Box>

        <Button type="submit" css={{ mt: '$24', width: '100%' }}>
          Submit
        </Button>
      </Box>
    </>
  );
}
