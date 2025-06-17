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

      {/* Meet the Founders */}
<Box
  sx={{ px: 4, py: 10, backgroundColor: "background.default" }}
  data-aos="zoom-in-up"
  id="founders"
>
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{ color: "primary.main", fontWeight: "bold" }}
  >
    Meet the Founders
  </Typography>

  <Typography
    variant="subtitle1"
    align="center"
    sx={{ maxWidth: 700, mx: "auto", color: "text.secondary", mb: 6 }}
  >
    The visionaries behind Doitrocket — driving creativity, performance, and digital transformation.
  </Typography>

  <Grid container spacing={6} justifyContent="center">
    {/* Founder 1 */}
    <Grid item xs={12} md={5}>
      <Box textAlign="center">
        <Box
          component="img"
          src="/images/founder1.jpg"
          alt="Ravi Verma"
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "4px solid",
            borderColor: "primary.main",
            mb: 2,
            boxShadow: 4,
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" }
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
          Ravi Verma
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
          CEO & Founder
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, maxWidth: 320, mx: "auto" }}>
          With a bold vision for innovation, Ravi transforms ideas into world-class digital products and leads strategy at Doitrocket.
        </Typography>
        <Button
          href="https://linkedin.com/in/raviverma"
          target="_blank"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Connect on LinkedIn
        </Button>
      </Box>
    </Grid>

    {/* Founder 2 */}
    <Grid item xs={12} md={5}>
      <Box textAlign="center">
        <Box
          component="img"
          src="/images/founder2.jpg"
          alt="Anjali Sharma"
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "4px solid",
            borderColor: "secondary.main",
            mb: 2,
            boxShadow: 4,
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" }
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
          Anjali Sharma
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
          CEO & Founder
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, maxWidth: 320, mx: "auto" }}>
          A creative force who breathes life into brands with visionary design and human-centered thinking.
        </Typography>
        <Button
          href="https://linkedin.com/in/anjalisharma"
          target="_blank"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Connect on LinkedIn
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>


      {/* Our Mission */}
      <Grid
        container
        spacing={4}
        sx={{ px: 4, py: 8, backgroundColor: "background.paper" }}
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
      <Box sx={{ px: 4, py: 8, backgroundColor: "background.default" }} data-aos="fade-up">
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
