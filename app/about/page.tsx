import * as React from 'react';
import { Box, Typography, CardMedia, Container, Paper, Button } from '@mui/material';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <Container sx={{ mt: 11, mb: 8 }} maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'darkgreen' }}>
                আমাদের প্রোডাক্টস সম্পর্কে
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', maxWidth: 800, borderRadius: 2, boxShadow: 3 }}
                    image="/garden/ab-1.jpg"
                    alt="Our Products"
                />
                <Typography variant="h5" component="div" sx={{ marginTop: 3, fontWeight: 'bold', color: '#2980b9' }}>
                    আম ও লিচু: রাজশাহীর প্রাকৃতিক গুণাগুণের উদাহরণ
                </Typography>
                <Box sx={{ maxWidth: 800, marginTop: 2, textAlign: 'justify' }}>
                    <Typography variant="body1" paragraph sx={{ marginBottom: 2, lineHeight: 1.8 }}>
                        আমাদের প্রোডাক্টস, আম এবং লিচু, রাজশাহীর মাটির সেরা ফসল। রাজশাহী অঞ্চলের উপযুক্ত জলবায়ু এবং মাটির গুণাগুণ আমাদের আমগুলিকে বিশেষভাবে সুস্বাদু এবং মিষ্টি করে তোলে।
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: 2, lineHeight: 1.8 }}>
                        রাজশাহীর লিচু আমাদের প্রিমিয়াম প্রোডাক্ট যা খুব শীঘ্রই উপলব্ধ হবে। এটি অত্যন্ত সুস্বাদু এবং পুষ্টিকর। আমরা নিশ্চিত করি যে আমাদের লিচুগুলি উন্নত মানের এবং সব ধরনের রাসায়নিক মুক্ত।
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: 2, lineHeight: 1.8 }}>
                        আমাদের প্রোডাক্টগুলি রাজশাহীর প্রকৃতির প্রাকৃতিক উপাদান ব্যবহার করে চাষাবাদ করা হয়। আমরা গ্রাহকদের জন্য সেরা মানের ফল সরবরাহ করতে প্রতিশ্রুতিবদ্ধ এবং আমাদের প্রোডাক্টগুলি বাজারের মধ্যে সেরা মান নিশ্চিত করতে পেশাদারভাবে যাচাই করা হয়।
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ marginBottom: 2, lineHeight: 1.8 }}>
                        রাজশাহী থেকে সরবরাহিত আমাদের প্রোডাক্ট কেনার মাধ্যমে আপনি শুধুমাত্র সুস্বাদু ফল পাবেন না, বরং একটি স্বাস্থ্যকর এবং প্রকৃতির সান্নিধ্য উপভোগ করবেন।
                    </Typography>
                </Box>
                <Typography variant="h5" component="div" sx={{ marginTop: 4, fontWeight: 'bold', color: '#2980b9' }}>
                    আমাদের বাগান ও কঠোর পরিশ্রম
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'justify', maxWidth: 800, marginTop: 2 }}>
                    <Typography variant="body1" paragraph sx={{ marginBottom: 2, lineHeight: 1.8 }}>
                        আমাদের প্রোডাক্টের সাফল্যের পিছনে রয়েছে একটি সুন্দর বাগান এবং সৃজনশীল চাষাবাদ প্রক্রিয়া। রাজশাহীর প্রাকৃতিক পরিবেশে আমাদের বিশেষভাবে পরিচরিত বাগানে আমরা তাজা ও সুস্বাদু ফল উৎপাদন করি।
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', marginTop: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 200, borderRadius: 2, boxShadow: 2 }}
                            image="/garden/g-1.jpg"
                            alt="Garden Image 1"
                        />
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 200, borderRadius: 2, boxShadow: 2 }}
                            image="/garden/g-2.jpg"
                            alt="Garden Image 2"
                        />
                    </Box>
                    <Typography variant="body1" paragraph sx={{ marginTop: 2, lineHeight: 1.8 }}>
                        আমাদের কৃষকরা প্রতিদিন কঠোর পরিশ্রম করেন, ফল গাছের যত্ন নেন এবং সঠিক সময়ে ফল সংগ্রহ করেন যাতে আপনি প্রাকৃতিক, তাজা এবং সুস্বাদু ফল পান। আমাদের জন্য, প্রতিটি ফল সংগ্রহ একটি শিল্প, এবং আমরা নিশ্চিত করি যে প্রতিটি প্রোডাক্ট আমাদের সেরা প্রচেষ্টা এবং ভালোবাসা দিয়ে প্রস্তুত করা হয়।
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        আমরা বিশ্বাস করি যে প্রকৃতির সান্নিধ্য ও পরিশ্রমের মাধ্যমে তৈরি প্রোডাক্টগুলির গুণমানেই আমাদের সাফল্য নিহিত। আমাদের প্রতিটি প্রোডাক্টে আপনাকে আমাদের কঠোর পরিশ্রম ও ভালোবাসার প্রতিফলন দেখতে পাবেন।
                    </Typography>
                </Box>
                <Link href="/pre-order" passHref>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                            px: { md: 15 },
                            backgroundColor: 'green',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'darkgreen'
                            }
                        }}
                    >
                        এখনই অর্ডার করুন
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
