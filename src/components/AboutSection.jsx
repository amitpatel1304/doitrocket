import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeading from "./reusable/SectionHeading";
import AppButton from "./reusable/AppButton";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutbanner from "../assets/images/about-banner.png";

AOS.init();

const AboutSection = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.default" }} id="about">
      {/* Section Heading */}
      <SectionHeading data-aos="fade-up">Who We Are</SectionHeading>

      {/* Flex Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {/* Left Content */}
        <Box
          data-aos="fade-right"
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            Your Trusted Digital Growth Partner
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}
          >
            At <strong>Doitrocket IT Solutions</strong>, we specialize in
            creating impactful digital experiences that empower businesses to
            grow. From custom website development and result-driven SEO to
            digital marketing strategies and brand-centric designs, we make sure
            your business stands out in a competitive world.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}
          >
            Our passionate team thrives on innovation, creativity, and delivering
            measurable results. We don’t just build websites — we craft digital
            solutions that help your business achieve long-term success.
          </Typography>

          <AppButton
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            href="#services"
          >
            Explore Our Services
          </AppButton>
        </Box>

        {/* Right Image */}
        <Box
          data-aos="fade-up"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            component="img"
            src={aboutbanner}
            alt="About Us"
            sx={{
              width: "100%",
              maxWidth: 500,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
