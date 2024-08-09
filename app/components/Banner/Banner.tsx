import Image from 'next/image';
import React from 'react';
import banner from '../../../public/images/mango-1.jpg'
import { Typography } from '@mui/material';

const Banner = () => {
    return (
        <div>
            <section style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                <Image
                    src={banner}
                    alt="Banner"
                    style={{ width: '100%', height: '650px', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    borderRadius: '8px'
                }}>
                    <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'white' }}>
                        রাজশাহীর সেরা আম
                    </Typography>
                    <Typography variant="body1">
                        রাজশাহীর খিরসাপাত এবং ল্যাংড়া আমের স্বাদে আসল মধু!<br />
                        গরমের এই মৌসুমে, এই দুই প্রকারের মিষ্টি ও রসালো আম সারা দেশজুড়ে বিখ্যাত। চলুন, আমরা সবাই মিলে এই অসাধারণ আমের মধুময় স্বাদ উপভোগ করি।
                    </Typography>
                </div>
            </section>
        </div>
    );
};

export default Banner;