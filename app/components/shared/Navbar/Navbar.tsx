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
const activeColor = '#008e48'; // Your specific green color

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
    const pathname = usePathname();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
                <Image
                    src={logo}
                    alt="MangoFusion Logo"
                    style={{ height: 80, width: 200 }}
                    priority
                />
            </Box>
            <Divider />
            <List>
                {links.map((link) => (
                    <ListItem key={link.href} disablePadding>
                        <ListItemButton
                            component={Link}
                            href={link.href}
                            sx={{
                                color: pathname === link.href ? activeColor : 'text.primary',
                                fontWeight: pathname === link.href ? 'bold' : 'normal',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                }
                            }}
                        >
                            <ListItemText primary={link.text} primaryTypographyProps={{ variant: 'body1' }} />
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
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    color: '#008e48',
                    px: { xs: 2, md: 13 }
                }}
                component="nav"
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo on the left */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: { xs: 1, sm: 0 }
                    }}>
                        <Link href="/" passHref>
                            <Image
                                src={logo}
                                alt="MangoFusion Logo"
                                style={{ height: 60, width: 150 }}
                                priority
                            />
                        </Link>
                    </Box>

                    {/* Desktop navigation */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'block' },
                        flexGrow: 1,
                        ml: 4
                    }}>
                        <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {links.map((link) => (
                                <ListItem key={link.href} disablePadding sx={{ width: 'auto' }}>
                                    <ListItemButton
                                        component={Link}
                                        href={link.href}
                                        sx={{
                                            px: 3,
                                            color: pathname === link.href ? activeColor : 'text.primary',
                                            fontWeight: pathname === link.href ? 'bold' : 'normal',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: activeColor
                                            },
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                transform: pathname === link.href ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                                                width: '60%',
                                                height: 2,
                                                backgroundColor: activeColor,
                                                transition: 'transform 0.3s ease',
                                            },
                                            '&:hover::after': {
                                                transform: 'translateX(-50%) scaleX(1)',
                                            }
                                        }}
                                    >
                                        <ListItemText
                                            primary={link.text}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                fontWeight: 'inherit'
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Mobile menu button on the right */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { sm: 'none' },
                            color: 'text.primary'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}