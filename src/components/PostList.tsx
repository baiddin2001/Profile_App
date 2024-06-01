// src/components/PostList.tsx
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const PostList = () => {
    const { data, error, isLoading } = useSWR('/api/posts', fetcher);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <Typography variant="h6" color="error">
                    Failed to load posts
                </Typography>
            </Box>
        );
    }

    return (
        <Box mt={5}>
            <Typography variant="h5" component="h2" gutterBottom>
                Posts
            </Typography>
            {data.map(post => (
                <Box key={post.id} mb={3}>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body1">{post.content}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default PostList;
