// src/components/HeroSection.js
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        paddingTop: { xs: 8, md: 12 },
        paddingBottom: { xs: 8, md: 16 },
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#d32f2f",
                marginBottom: 2,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Empower Your Digital Presence
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#757575", marginBottom: 4 }}
            >
              We deliver cutting-edge solutions in Web Development, SEO, Digital
              Marketing, and Graphic Design to fuel your business growth.
            </Typography>
            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  marginRight: 2,
                  backgroundColor: "#d32f2f",
                  "&:hover": {
                    backgroundColor: "#b71c1c",
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#d32f2f",
                  borderColor: "#d32f2f",
                  "&:hover": {
                    backgroundColor: "#fbe9e7",
                    borderColor: "#b71c1c",
                    color: "#b71c1c",
                  },
                }}
              >
                Explore Services
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} data-aos="zoom-in">
            <Box
              component="img"
              src="https://via.placeholder.com/600x400?text=Doitrocket+Visual"
              alt="Hero Graphic"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
