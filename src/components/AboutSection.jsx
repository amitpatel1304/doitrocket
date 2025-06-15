// src/components/AboutSection.js
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
      id="about"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Box
              component="img"
              src="https://via.placeholder.com/500x350?text=Doitrocket+Team"
              alt="About Doitrocket"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#d32f2f",
                marginBottom: 2,
              }}
            >
              About Doitrocket
            </Typography>
            <Typography sx={{ color: "#424242", fontSize: "1.1rem" }}>
              At Doitrocket IT Solutions, we help businesses launch their
              digital presence through powerful web applications, innovative
              marketing strategies, and visually striking design. Our dedicated
              team turns ideas into scalable solutions — fast, modern, and
              effective.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
