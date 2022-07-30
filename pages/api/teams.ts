import type { NextApiRequest, NextApiResponse } from 'next';
import type { Team } from './Types/team';

const apiUrl = "https://graphql.contentful.com/content/v1/spaces/6rtrkvbq91ik";

export default function teamsHandler(
    req: NextApiRequest,
    res: NextApiResponse<Team[]>
){
   query
}