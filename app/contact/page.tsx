'use client'; // Ensures this component is rendered on the client-side

import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { Container, Grid } from '@mui/material';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const ContactPage = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    // Function to handle form submission
    const onSubmit = (data: FormValues) => {
        console.log(data); // Handle form data here
        // You can send the data to an API or handle it as needed
    };

    return (
        <Container sx={{ mt: 11, mb: 8 }} maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'darkgreen' }}>
                আমাদের সাথে যোগাযোগ করুন
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="h2" gutterBottom>
                        বার্তা পাঠান
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="নাম"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...register('name', { required: 'নাম প্রয়োজন' })}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ''}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#666',
                                },
                                '&:hover .MuiInputLabel-root': {
                                    color: 'green',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'green',
                                },
                            }}
                        />
                        <TextField
                            label="ইমেইল"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...register('email', { required: 'ইমেইল প্রয়োজন' })}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ''}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#666',
                                },
                                '&:hover .MuiInputLabel-root': {
                                    color: 'green',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'green',
                                },
                            }}
                        />
                        <TextField
                            label="বার্তা"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            {...register('message', { required: 'বার্তা প্রয়োজন' })}
                            error={!!errors.message}
                            helperText={errors.message ? errors.message.message : ''}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#666',
                                },
                                '&:hover .MuiInputLabel-root': {
                                    color: 'green',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'green',
                                },
                            }}
                        />
                        <Button type="submit" variant="contained" sx={{
                            mt: 2,
                            backgroundColor: 'darkgreen',
                            '&:hover': {
                                backgroundColor: 'forestgreen',
                            },
                        }}>
                            পাঠান
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="h2" gutterBottom>
                        আমাদের অবস্থান
                    </Typography>
                    <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.7325457462234!2d89.8522267!3d24.4947221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf3d65f18ed21%3A0x5985b3002d7f158!2sSimple%20House!5e0!3m2!1sen!2sbd!4v1723219277050!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPage;
