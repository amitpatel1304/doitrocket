// src/components/ServicesSection.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import WebIcon from "@mui/icons-material/LaptopMac";
import SeoIcon from "@mui/icons-material/TrendingUp";
import MarketingIcon from "@mui/icons-material/Campaign";
import DesignIcon from "@mui/icons-material/Brush";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, fast, and responsive websites built for performance and scalability.",
    icon: <WebIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve visibility and rankings with expert on-page and off-page SEO.",
    icon: <SeoIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven digital campaigns to grow leads and brand awareness.",
    icon: <MarketingIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
  },
  {
    title: "Graphic Designing",
    description:
      "Creative design solutions for branding, social media, and beyond.",
    icon: <DesignIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 8, md: 12 } }} id="services">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "#d32f2f", mb: 6 }}
          data-aos="fade-up"
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box mb={2}>{service.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: "#757575", fontSize: "0.95rem" }}>
                  {service.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
