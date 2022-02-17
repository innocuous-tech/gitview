import type { GetStaticPaths } from 'next';
import { Octokit } from '@octokit/rest';
import { Box } from '~/components/Box';
import Head from 'next/head';

const ONE_MINUTE = 60;

interface GetStaticPropsArgs {
  params: {
    ownerName: string;
    repoName: string;
  };
}

interface GetStaticPropsReturn {
  ownerName: GetStaticPropsArgs['params']['ownerName'];
  repoName: GetStaticPropsArgs['params']['repoName'];
  commits: {
    author: string;
    date: string;
    message: string;
    url: string;
  }[];
}

export const getStaticProps = async ({ params }: GetStaticPropsArgs) => {
  try {
    const octokit = new Octokit({ auth: process.env.GIT_PAT });
    const response = await octokit.repos.listCommits({
      owner: params.ownerName,
      repo: params.repoName,
      per_page: 50,
      page: 1,
    });

    const commits = response.data.map(({ commit, html_url }) => ({
      author: commit.author?.name ?? 'Unknown',
      date: commit.author?.date ?? 'Unknown',
      message: commit.message,
      url: html_url,
    }));

    const props: GetStaticPropsReturn = { commits, ...params };

    return {
      props,
      revalidate: ONE_MINUTE,
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/does/not/exist',
        permanent: true,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

export default function CommitList({ ownerName, repoName, commits }: GetStaticPropsReturn) {
  /**
   * TODO: pass initial data and fetcher to `useSWRInfinite` to enable infinite scrolling
   * @see https://swr.vercel.app/docs/pagination#useswrinfinite
   */

  const committerMap = commits.reduce((prev, curr) => {
    return { ...prev, [curr.author]: !!prev[curr.author] ? prev[curr.author] + 1 : 1 };
  }, {} as { [key: string]: number });

  const mostCommits = Object.values(committerMap).sort((a, b) => b - a)[0];

  const biggestCommitter = Object.keys(committerMap).find(
    committer => committerMap[committer] === mostCommits,
  );

  return (
    <>
      <Head>
        <title>
          Commits for {ownerName}/{repoName}
        </title>
      </Head>

      <Box
        as="ul"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$16',
          p: '$24',
          mx: 'auto',
          listStyle: 'none',
          maxW: '1000px',

          '@mobile': {
            px: 0,
            gap: '0',
          },
        }}
      >
        <Box
          css={{
            display: 'flex',
            gap: '$12',
            backgroundColor: '$mauve2',
            borderRadius: '$smol',
            border: '1px solid',
            borderColor: '$mauve7',
            color: '$mauve11',
            fontWeight: '$bold',
            p: '$16',

            '@mobile': {
              flexDirection: 'column',
              m: '$12',
            },
          }}
        >
          {biggestCommitter} has the most commits recently, with {mostCommits} commits.
        </Box>

        {commits.map(commit => {
          return (
            <Box
              as="li"
              key={commit.url}
              css={{
                display: 'flex',
                gap: '$12',
                backgroundColor: '$plum2',
                borderRadius: '$smol',
                border: '1px solid',
                borderColor: '$plum7',
                color: '$plum11',
                p: '$16',

                '@mobile': {
                  flexDirection: 'column',
                  m: '$12',
                },
              }}
            >
              <Box as="time" dateTime={commit.date} css={{}}>
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                  minute: '2-digit',
                  hour: '2-digit',
                }).format(new Date(commit.date))}
              </Box>

              <Box
                as="a"
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                css={{
                  color: '$plum12',
                  ellipsis: 'default',
                  flex: 1,
                }}
              >
                {commit.message}
              </Box>

              <Box as="span" css={{}}>
                {commit.author}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
