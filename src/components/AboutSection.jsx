import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import SectionHeading from "./reusable/SectionHeading";
import AppButton from "./reusable/AppButton";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutSection = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.default" }} id="about">
      <SectionHeading data-aos="fade-up">Who We Are</SectionHeading>

      <Grid container spacing={6} alignItems="center" mt={2}>
        {/* Left Text */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
            Your Digital Growth Partner
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.7 }}
          >
            Doitrocket IT Solutions is a full-service web agency helping businesses
            establish an impactful digital presence. From custom website development
            to result-oriented digital marketing, we deliver solutions that drive growth.
          </Typography>
          <AppButton
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            href="#services"
          >
            Explore Our Services
          </AppButton>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            component="img"
            src="/images/about-us.jpg"
            alt="About Us"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
