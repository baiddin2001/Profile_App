// pages/index.tsx
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import NavBar from '../src/components/NavBar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PostList from '../src/components/PostList';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const HomePage = () => {
    const { data, error, isLoading } = useSWR('/api/user', fetcher);

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
                    Failed to load user data
                </Typography>
            </Box>
        );
    }

    return (
        <div>
            <NavBar />
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Home Page
                    </Typography>
                    <Typography variant="body1"><strong>Name:</strong> {data.name}</Typography>
                    <Typography variant="body1"><strong>Email:</strong> {data.email}</Typography>
                    <Typography variant="body1"><strong>Bio:</strong> {data.bio}</Typography>
                    <PostList />
                </Box>
            </Container>
        </div>
    );
};

export default HomePage;
