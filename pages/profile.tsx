// pages/profile.tsx
import React from 'react';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import ProfileForm from '../src/components/ProfileForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NavBar from '../src/components/NavBar';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const ProfilePage = () => {
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

    const handleSubmit = async (values) => {
        try {
            await axios.put('/api/user', values);
            alert('Profile updated successfully!');
            mutate('/api/user');  // Revalidate SWR cache
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <div>
            <NavBar />
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Profile Page
                    </Typography>
                    <ProfileForm initialValues={data} onSubmit={handleSubmit} />
                </Box>
            </Container>
        </div>
    );
};

export default ProfilePage;
