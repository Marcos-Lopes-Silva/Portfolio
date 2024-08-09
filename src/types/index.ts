export default interface Star {
    top: number;
    left: number;
    speed: number;
}

import type { Endpoints } from "@octokit/types";

export type GetListReposResponse = Endpoints["GET /user/repos"]["response"]["data"];