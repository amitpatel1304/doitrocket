import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HeroSection = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: { xs: 6, md: 12 },
        backgroundColor: "background.paper",
        textAlign: "center",
      }}
      id="home"
    >
      <SectionHeading data-aos="fade-up">
        Empowering Your Digital Growth
      </SectionHeading>

      <Typography
        variant="subtitle1"
        sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At Doitrocket IT Solutions, we build modern websites, boost visibility
        through SEO, and create stunning brand experiences.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        mt={4}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <AppButton variant="contained" color="primary" href="#contact">
          Get Started
        </AppButton>
        <AppButton variant="outlined" color="secondary" href="#services">
          Learn More
        </AppButton>
      </Stack>
    </Box>
  );
};

export default HeroSection;
