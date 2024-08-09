'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography } from '@mui/material';

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
    const router = useRouter();

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f4f4f4',
                padding: 3,
            }}
        >
            <Typography variant="h2" sx={{ fontSize: '4rem', fontWeight: 'bold', color: '#d32f2f' }}>
                Something went wrong!
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 2, color: '#666' }}>
                We encountered an error processing your request.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4, color: '#888' }}>
                {error.message}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => reset()}
                sx={{ marginRight: 2 }}
            >
                Try Again
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => router.push('/')}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default ErrorPage;
