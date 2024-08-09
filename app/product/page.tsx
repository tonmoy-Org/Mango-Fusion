import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia, Container } from '@mui/material';
import Link from 'next/link';

const OurProduct = () => {
    return (
        <Container sx={{ mt: 11, mb: 8 }} maxWidth='md'>
            <Box>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'darkgreen' }}>
                        আমাদের প্রোডাক্টস
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body1" gutterBottom>
                        আমাদের প্রোডাক্টসের বিস্তারিত বিবরণ নীচে দেওয়া হলো। এখানে আপনি বিভিন্ন প্রকারের ফল এবং তাদের বৈশিষ্ট্য দেখতে পারবেন।
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {/* Mango Card */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/products/p11.jpg"
                            alt="Mango"
                            sx={{ objectFit: 'cover', height: 200 }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} component="div">
                                আম
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                তাজা এবং সুস্বাদু আম। মৌসুমী ফলের মধ্যে অন্যতম। এখনই কিনুন এবং গরমে মিষ্টি আমের স্বাদ উপভোগ করুন!
                            </Typography>
                            <Link href="/pre-order" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
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

                    {/* Licy Card */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/products/p2.jpg"
                            alt="Licy"
                            sx={{ objectFit: 'cover', height: 200 }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} component="div">
                                লিচু
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                সুস্বাদু লিচু যা খুব শীঘ্রই উপলব্ধ হবে। আসন্ন মৌসুমে লিচুর স্বাদ উপভোগ করতে অপেক্ষা করুন।
                            </Typography>
                            <Button variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: 'green',
                                    '&:hover': {
                                        backgroundColor: 'darkgreen'
                                    }
                                }}
                                disabled>
                                কিনুন
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
};

export default OurProduct;
