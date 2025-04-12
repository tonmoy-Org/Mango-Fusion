'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Button, Container } from '@mui/material';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { motion } from 'framer-motion';

import mango1 from '../../../public/images/mango-1.jpg';
import mango2 from '../../../public/images/mango-2.jpg';
import mango3 from '../../../public/images/mango-3.jpg';
import mango4 from '../../../public/images/mango-4.jpg';
import mango5 from '../../../public/images/mango-5.jpg';
import mango6 from '../../../public/images/mango-6.jpg';

const slides = [
    {
        img: mango1,
        title: 'সরাসরি রাজশাহী থেকে তাজা আম',
        description: 'আমাদের খিরসাপাত ও ল্যাংড়া আম আসে সরাসরি বাগান থেকে, কোনো প্রিজারভেটিভ বা কেমিক্যাল ছাড়াই।',
    },
    {
        img: mango2,
        title: 'খাঁটি স্বাদের নিশ্চয়তা',
        description: 'প্রাকৃতিকভাবে পাকা প্রতিটি আমে রয়েছে স্বাদের গভীরতা ও সততার প্রতিচ্ছবি।',
    },
    {
        img: mango3,
        title: 'গ্রীষ্মের সেরা উপহার',
        description: 'এই গরমে শরীর ঠান্ডা রাখতে রসালো ও পুষ্টিকর আমই হতে পারে আপনার সেরা পছন্দ।',
    },
    {
        img: mango4,
        title: 'প্রিয় ল্যাংড়া আম এখন হাতের নাগালে',
        description: 'মিষ্টি স্বাদের ল্যাংড়া এখন ঘরে বসেই পাচ্ছেন – অর্ডার করুন নিশ্চিন্তে।',
    },
    {
        img: mango5,
        title: 'প্রতিদিনের পুষ্টিতে এক কাপ আম',
        description: 'ভিটামিন C, আঁশ ও অ্যান্টিঅক্সিডেন্টে ভরপুর – প্রতিদিন খান স্বাস্থ্যসম্মত আম।',
    },
    {
        img: mango6,
        title: 'বিশ্বাসের সাথে সরবরাহ',
        description: 'আমাদের প্রতিটি আম আসে বিশ্বস্ত চাষিদের কাছ থেকে – খাঁটি, সততা ও গুণগত মানের প্রতিশ্রুতি নিয়ে।',
    },
];

const Banner = () => {
    return (
        <div className='lg:px-28 pt-20 lg:pt-4'>
            <Container maxWidth='xl'>
                <CCarousel indicators transition="crossfade"
                    controls={false} // optional: hides prev/next buttons
                    interval={1000} // autoplay every 5 seconds
                    wrap={true} // enables looping
                >
                    {slides.map((slide, index) => (
                        <CCarouselItem key={index}>
                            <div className="relative w-full h-[550px]">
                                <Image
                                    src={slide.img}
                                    alt={`Mango ${index + 1}`}
                                    fill
                                    className="object-cover rounded-md"
                                    priority
                                />
                                <div className="absolute inset-0 flex justify-end items-center bg-black bg-opacity-10 px-8 text-right">
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="max-w-xl space-y-4"
                                    >
                                        <Typography
                                            variant="h4"
                                            component="h1"
                                            sx={{ fontWeight: 'bold', color: 'white' }}
                                        >
                                            {slide.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'white' }}>
                                            {slide.description}
                                        </Typography>

                                        {/* Button with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="warning"
                                                size="large"
                                                sx={{
                                                    borderRadius: '30px',
                                                    fontWeight: 'bold',
                                                    px: 4,
                                                    py: 1.5,
                                                }}
                                            >
                                                এখনই অর্ডার করুন
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </CCarouselItem>
                    ))}
                </CCarousel>
            </Container>
        </div>
    );
};

export default Banner;
