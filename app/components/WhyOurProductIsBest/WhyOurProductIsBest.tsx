// WhyOurProductIsBest.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const WhyOurProductIsBest = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Box sx={{ marginTop: 4 }}>
                <Box sx={{ display: { md: 'flex' }, alignItems: 'center', gap: 5 }}>
                    <Box
                        sx={{
                            flex: 1,
                            width: '100%',
                            height: 'auto',
                            borderRadius: 1,
                            overflow: 'hidden',
                            mb: { xs: 2 },
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            component="video"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 1
                            }}
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/videos/mango-videos.mp4" type="video/mp4" />
                            আপনার ব্রাউজার ভিডিও ট্যাগ সমর্থন করে না।
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h5" gutterBottom>
                            আমাদের প্রোডাক্ট কেন সেরা
                        </Typography>
                        <Typography variant="body1" paragraph>
                            আমরা প্রোডাক্টের গুণগত মানের প্রতি অত্যন্ত যত্নশীল। আমাদের ফলমূল তাজা এবং পুষ্টিকর, যা সারা বছর ধরে আপনার স্বাস্থ্য এবং সুস্থতা বজায় রাখবে।
                        </Typography>
                        <Typography variant="body1" paragraph>
                            প্রতিটি প্রোডাক্ট উন্নত মানের বাছাইকৃত উপকরণ থেকে প্রস্তুত করা হয় এবং আমরা সর্বোচ্চ স্বাস্থ্যের মান নিশ্চিত করি। আমাদের প্রোডাক্টগুলি পরীক্ষা-নিরীক্ষা করা হয় এবং কোনো ধরনের রাসায়নিক বা কৃত্রিম উপাদান যুক্ত করা হয় না।
                        </Typography>
                        <Typography variant="body1" paragraph>
                            আমরা আপনার সন্তুষ্টি নিশ্চিত করতে কঠোর নিয়ম অনুসরণ করি এবং আমাদের প্রোডাক্টের উপর গর্বিত। আমাদের প্রোডাক্ট কেনার মাধ্যমে আপনি শুধুমাত্র সুস্বাদু ফল পাবেন না, বরং একটি স্বাস্থ্যকর জীবনধারা উপভোগ করবেন।
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default WhyOurProductIsBest;
