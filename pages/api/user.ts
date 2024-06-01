// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';

let user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate developer who loves to explore new technologies.',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(user);
    } else if (req.method === 'PUT') {
        user = { ...user, ...req.body };
        res.status(200).json(user);
    } else {
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
