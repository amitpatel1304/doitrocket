import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const pages = ['Home', 'About', 'Services', 'Blog', 'Contact'];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ color: '#d32f2f', fontWeight: 700 }}>
          Doitrocket
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem button key={page}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={2} sx={{ bgcolor: '#f5f5f5', color: '#333' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RocketLaunchIcon sx={{ color: 'red', mr: 1 }} />
          <Typography variant="h6" noWrap sx={{ color: '#d32f2f', fontWeight: 700 }}>
            Doitrocket
          </Typography>
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: '#555',
                  mx: 1,
                  fontWeight: 500,
                  '&:hover': {
                    color: '#d32f2f',
                    backgroundColor: 'rgba(211, 47, 47, 0.08)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
