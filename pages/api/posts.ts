// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(posts);
    } else if (req.method === 'POST') {
        const newPost = { id: posts.length + 1, ...req.body };
        posts.push(newPost);
        res.status(201).json(newPost);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
