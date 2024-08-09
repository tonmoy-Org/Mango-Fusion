'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo/mango.png';
import { usePathname } from 'next/navigation';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

const links = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/product' },
    { text: 'Order', href: '/pre-order' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const pathname = usePathname(); // Get the current pathname

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
                <Image
                    src={logo}
                    alt="MangoFusion Logo"
                    style={{ height: 40, width: 40 }}
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                >
                    MangoFusion
                </Typography>
            </Box>
            <Divider />
            <List>
                {links.map((link) => (
                    <ListItem key={link.href} disablePadding>
                        <ListItemButton
                            component={Link}
                            href={link.href}
                            sx={{
                                color: pathname === link.href ? 'darkgreen' : 'black',
                                fontWeight: pathname === link.href ? 'bold' : '',
                            }}
                        >
                            <ListItemText primary={link.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', mb: { md: 8 } }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'white', color: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Image
                            src={logo}
                            alt="MangoFusion Logo"
                            style={{ height: 40, width: 40 }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: 'bold' }}
                        >
                            MangoFusion
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <List sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {links.map((link) => (
                                <ListItem key={link.href} disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        href={link.href}
                                        sx={{
                                            bgcolor: 'transparent',
                                            borderBottom: pathname === link.href ? '3px solid darkgreen' : '3px solid transparent',
                                            '&:hover': {
                                                borderBottom: '3px solid black',
                                                bgcolor: 'transparent'
                                            },
                                        }}
                                    >
                                        <ListItemText primary={link.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
