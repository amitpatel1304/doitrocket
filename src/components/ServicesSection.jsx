import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Language";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SEOIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SectionHeading from "./reusable/SectionHeading";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Web Development",
    description:
      "Custom websites built for performance, scalability, and responsive design.",
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that convert leads into loyal customers.",
  },
  {
    icon: <SEOIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "SEO Optimization",
    description:
      "Improve visibility and rankings with our proven SEO strategies.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Graphic Designing",
    description:
      "Stunning visual designs that reflect your brand identity.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{ px: 4, py: 8, backgroundColor: "background.paper" }}
      id="services"
    >
      <SectionHeading data-aos="fade-up">Our Services</SectionHeading>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              minWidth: 260,
              p: 4,
              textAlign: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Stack alignItems="center" spacing={2}>
              {service.icon}
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
