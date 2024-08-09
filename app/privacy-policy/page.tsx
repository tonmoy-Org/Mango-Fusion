import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const PrivacyPolicy = () => {
    return (
        <Container sx={{ mt: 11, mb: 8 }} maxWidth='lg'>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'darkgreen' }}>
                Privacy Policy
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Introduction
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to MangoFusion! This privacy policy explains how we collect, use, and protect your personal information when you visit our website or use our services. By using our website, you agree to the terms of this privacy policy.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
                We may collect the following types of information:
            </Typography>
            <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph>
                    - Personal Information: Such as your name, email address, and contact details.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Usage Data: Information about how you use our website and services.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Cookies and Tracking Technologies: We use cookies to enhance your browsing experience and analyze website traffic.
                </Typography>
            </Box>

            <Typography variant="h6" component="h2" gutterBottom>
                How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
                We use the collected information to:
            </Typography>
            <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph>
                    - Provide and improve our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Communicate with you, including responding to your inquiries.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Analyze and understand user behavior to enhance user experience.
                </Typography>
            </Box>

            <Typography variant="h6" component="h2" gutterBottom>
                How We Protect Your Information
            </Typography>
            <Typography variant="body1" paragraph>
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Your Choices
            </Typography>
            <Typography variant="body1" paragraph>
                You have the right to:
            </Typography>
            <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph>
                    - Access and update your personal information.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Opt out of receiving marketing communications from us.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Request deletion of your personal information, subject to certain legal requirements.
                </Typography>
            </Box>

            <Typography variant="h6" component="h2" gutterBottom>
                Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                If you have any questions about this privacy policy, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
                Email: <a href="mailto:support@mangofusion.com">support@mangofusion.com</a>
            </Typography>
        </Container>
    );
};

export default PrivacyPolicy;
