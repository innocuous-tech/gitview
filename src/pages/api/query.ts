import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const octokit = new Octokit({ auth: process.env.GIT_PAT });

  // Form body
  const formBody = req.body;

  // Both of these are required.
  if (!formBody.orgName || !formBody.repoName) {
    const searchParams = new URLSearchParams({ error: 'Missing required fields.' });

    return res.status(400).redirect(`/?${searchParams}`);
  }

  console.log({ formBody });

  try {
    const response = await octokit.repos.get({ owner: formBody.orgName, repo: formBody.repoName });

    const ownerName = response.data.owner.login;
    const repoName = response.data.name;

    console.log(response.data);

    if (!ownerName || !repoName) throw new Error('Could not find owner name or repo name');

    return res.status(200).redirect(`/${ownerName}/${repoName}`);
  } catch (error) {
    console.error(error);

    const searchParams = new URLSearchParams({
      error: 'We could not find this repository. Perhaps there is a typo?',
    });

    return res.status(404).redirect(`/?${searchParams}`);
  }
}
