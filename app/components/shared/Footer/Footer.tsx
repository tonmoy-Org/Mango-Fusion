"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
];

const socialLinks = [
    { label: 'Facebook', icon: <FacebookIcon /> },
    { label: 'Twitter', icon: <TwitterIcon /> },
    { label: 'LinkedIn', icon: <LinkedInIcon /> },
    { label: 'GitHub', icon: <GitHubIcon /> },
];

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 4, px: 2, mt: 'auto', backgroundColor: '#000', color: '#fff' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                            MangoFusion
                        </Typography>
                        <Typography variant="body2" paragraph>
                            ম্যানগোফিউশন-এ আপনি পাবেন রাজশাহীর সেরা আমের স্বাদ। আমাদের উদ্দেশ্য হল আপনাদের কাছে সবচেয়ে ভালো এবং সুস্বাদু আম উপহার দেওয়া।
                        </Typography>
                        <Typography variant="body2">
                            যোগাযোগ: +880 109804993
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    variant="body2"
                                    color="inherit"
                                    display="block"
                                    sx={{ mb: 1 }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    aria-label={social.label}
                                    color="inherit"
                                    sx={{ mx: 1 }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 4, p: 2, borderTop: '1px solid #ddd' }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        &copy; {new Date().getFullYear()} MangoFusion. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        Designed and Developed by <strong>Md. Tanvir Hasan Tonmoy</strong>
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}
