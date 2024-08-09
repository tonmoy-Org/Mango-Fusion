"use client"; // Ensures this component is rendered on the client-side

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Container, Button } from '@mui/material';
import Link from 'next/link';

const ProductsPage = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="h1" gutterBottom>
                আমাদের প্রোডাক্টস
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            image="/products/images (1).jpeg" // Path to your image in the public directory
                            alt="Khirsapati Mango"
                            sx={{ objectFit: 'cover', height: 250 }} // Ensures image covers the area properly
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                                খিরসাপাত আম
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                রাজশাহীর খিরসাপাত আমের মিষ্টি ও সুস্বাদু স্বাদ সারা দেশে বিখ্যাত।
                            </Typography>
                            <Link href="/pre-order" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: 'green',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkgreen'
                                        }
                                    }}
                                >
                                    কিনুন
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            image="/products/himsagar.webp"
                            alt="Langra Mango"
                            sx={{ objectFit: 'cover', height: 250 }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                                ল্যাংড়া আম
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ল্যাংড়া আমের রসালো ও মিষ্টি স্বাদ গরমের মৌসুমে চাহিদা অনেক বেশি।
                            </Typography>
                            <Link href="/pre-order" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: 'green',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkgreen'
                                        }
                                    }}
                                >
                                    কিনুন
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            image="/products/h-1.png"
                            alt="Langra Mango"
                            sx={{ objectFit: 'cover', height: 250 }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                                হিমসাগর আম
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                হিমসাগর আমের রসালো ও মিষ্টি স্বাদ গরমের মৌসুমে চাহিদা অনেক বেশি।
                            </Typography>
                            <Link href="/pre-order" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: 'green',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkgreen'
                                        }
                                    }}
                                >
                                    কিনুন
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductsPage;
