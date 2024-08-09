import { octokit } from "./config";


export async function fetchRepos() {
    const response = await octokit.request('GET /user/repos?private=false', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

    return response.data;
}