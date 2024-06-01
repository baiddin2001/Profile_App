// src/components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavBar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My App
            </Typography>
            <Box>
                <Button color="inherit" component={Link} href="/">Home</Button>
                <Button color="inherit" component={Link} href="/profile">Profile</Button>
                <Button color="inherit" component={Link} href="/post">Post</Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default NavBar;
