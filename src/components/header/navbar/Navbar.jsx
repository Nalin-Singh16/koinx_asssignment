import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../../../assets/index';
import './Navbar.css'; // Make sure the path to your CSS file is correct

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:830px)');

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <List>
            {['Crypto Taxes', 'Free Tools', 'Resource Center'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static" color="inherit" elevation={0} sx={{ maxWidth: 1440, height: 80, margin: 'auto' }}>
            <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <img src={logo} alt="KoinZ logo" style={{ height: '25%' }} />
                {isMobile ? (
                    <>
                        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <div>
                        <Button color="inherit" sx={{ fontFamily: 'Inter', fontWeight: '600' }}>Crypto Taxes</Button>
                        <Button color="inherit" sx={{ fontFamily: 'Inter', fontWeight: '600' }}>Free Tools</Button>
                        <Button color="inherit" sx={{ fontFamily: 'Inter', fontWeight: '600' }}>Resource Center</Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#2870EA',
                                '&:hover': { backgroundColor: '#0056b3' },
                                fontFamily: 'Inter',
                                fontWeight: '600',
                                width: 136,
                                height: 40,
                                borderRadius: 3
                            }}
                        >
                            Get Started
                        </Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
