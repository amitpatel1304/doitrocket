import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import SectionHeading from "../components/reusable/SectionHeading";
import OurTeam from "../components/OurTeam";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", color: "text.primary" }}>
      
      {/* Hero Banner */}
      <Box
        sx={{
          px: 4,
          py: { xs: 6, md: 10 },
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 700 }} data-aos="fade-up">
          About Doitrocket IT Solutions
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, color: "text.secondary", maxWidth: 700, mx: "auto" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We help businesses grow through cutting-edge design, web development, SEO and digital strategy.
        </Typography>
      </Box>

      {/* Our Mission */}
      <Grid
        container
        spacing={4}
        sx={{ px: 4, py: 8 }}
        alignItems="center"
        data-aos="fade-up"
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/mission.jpg"
            alt="Our Mission"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionHeading>Our Mission</SectionHeading>
          <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            Our mission is to empower businesses by creating robust, user-friendly digital experiences. We are committed to delivering solutions that drive real growth and client success — whether it's through stunning websites, result-driven marketing, or brand-centric design.
          </Typography>
        </Grid>
      </Grid>

      {/* Our Vision */}
      <Box sx={{ px: 4, py: 8, backgroundColor: "background.paper" }} data-aos="fade-up">
        <SectionHeading>Our Vision</SectionHeading>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 800, mx: "auto", textAlign: "center", lineHeight: 1.8 }}
        >
          To be the most trusted digital partner for startups and enterprises worldwide — by delivering innovative technology, strategic insight, and creative excellence with every project we take on.
        </Typography>
      </Box>

      {/* Our Team Section */}
      <OurTeam />

    </Box>
  );
};

export default AboutUs;
