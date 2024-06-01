// pages/post.tsx
import React from 'react';
import axios from 'axios';
import NavBar from '../src/components/NavBar';
import PostForm from '../src/components/PostForm';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PostPage = () => {
    const handleSubmit = async (values) => {
        try {
            await axios.post('/api/posts', values);
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <div>
            <NavBar />
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create a Post
                    </Typography>
                    <PostForm onSubmit={handleSubmit} />
                </Box>
            </Container>
        </div>
    );
};

export default PostPage;
