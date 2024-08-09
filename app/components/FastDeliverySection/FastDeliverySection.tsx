import * as React from 'react';
import { Box, Typography, CardMedia, Button, Container } from '@mui/material';
import Link from 'next/link';

const FastDeliverySection = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Box sx={{ display: { md: 'flex' }, flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', borderRadius: 2, my: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 500, height: 380, borderRadius: 2, flexShrink: 0, boxShadow: 3, mb: 3 }}
                    image="/images/d-1.png"
                    alt="Fast Delivery"
                />
                <Box sx={{ flex: 1, paddingRight: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="h1" gutterBottom>
                        দ্রুত ডেলিভারি সেবা
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginTop: 2, lineHeight: 1.8 }}>
                        আমাদের দ্রুত ডেলিভারি সেবা নিশ্চিত করে যে আপনি তাজা এবং সুস্বাদু আম দ্রুত পেতে পারেন। আমাদের প্রতিশ্রুতি হল,
                        আপনার অর্ডার আমরা ২৪ ঘণ্টার মধ্যে প্রক্রিয়া করি এবং সঠিক সময়ে পৌঁছে দেই, যাতে আপনি আমাদের প্রোডাক্টের স্বাদ
                        ও গুণমান উপভোগ করতে পারেন।
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        দ্রুত ডেলিভারির সুবিধা পেতে, আজই আপনার অর্ডার দিন এবং আমাদের প্রিমিয়াম আম উপভোগ করুন। আমরা নিশ্চিত করছি
                        যে আমাদের ডেলিভারি সেবা আপনার প্রত্যাশা ছাড়িয়ে যাবে।
                    </Typography>
                    <Link href="/pre-order" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 2,
                                my: { xs: 2 },
                                backgroundColor: 'green',
                                '&:hover': {
                                    backgroundColor: 'darkgreen'
                                }
                            }}
                        >
                            এখনই অর্ডার করুন
                        </Button>
                    </Link>
                </Box>

            </Box>
        </Container>
    );
};

export default FastDeliverySection;
