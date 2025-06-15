// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const pages = ['Home', 'About', 'Services', 'Blog', 'Contact'];

export default function Header() {
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

        {/* Nav Links */}
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
      </Toolbar>
    </AppBar>
  );
}
