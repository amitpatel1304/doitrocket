import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "#fff",
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 6,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={4}
      >
        {/* Left: Logo & Tagline */}
        <Box>
          <Typography variant="h6" sx={{ color: "#e53935", fontWeight: "bold" }}>
            Doitrocket IT Solutions
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#ccc" }}>
            Driving digital excellence with web, SEO, and marketing.
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Stack direction="row" spacing={3} flexWrap="wrap">
          <Link href="#about" underline="hover" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            About
          </Link>
          <Link href="#services" underline="hover" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            Services
          </Link>
          <Link href="#testimonials" underline="hover" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            Testimonials
          </Link>
          <Link href="#blog" underline="hover" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            Blog
          </Link>
          <Link href="#contact" underline="hover" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            Contact
          </Link>
        </Stack>

        {/* Right: Social Icons */}
        <Stack direction="row" spacing={2}>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#ccc", "&:hover": { color: "#e53935" } }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Bottom Strip */}
      <Box textAlign="center" mt={4} pt={2} borderTop="1px solid #424242">
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} Doitrocket IT Solutions. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSection;
