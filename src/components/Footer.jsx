import React from "react";
import { Box, Typography, Stack, Link, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "text.primary",
        color: "background.paper",
        px: 4,
        py: 6,
        mt: 6,
      }}
    >
      {/* Main Flex Container */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        gap={4}
        flexWrap="wrap"
      >
        {/* Column 1: Logo + About */}
        <Box flex={1} minWidth={240}>
          <Box
            component="img"
            src="/doitrocket.png"
            alt="Doitrocket Logo"
            sx={{ height: 150, width: 200, mb: 2 }}
          />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Doitrocket IT Solutions is your one-stop agency for Web, SEO, Marketing & Design.
          </Typography>
        </Box>

        {/* Column 2: Navigation */}
        <Box flex={1} minWidth={200}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="hover"
                sx={{
                  color: "background.paper",
                  fontSize: 14,
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Column 3: Contact Info */}
        <Box flex={1} minWidth={240}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            Email: contact@doitrocket.com
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            Phone: +91 98765 43210
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Mon – Fri: 10 AM – 6 PM
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4, borderColor: "divider" }} />

      {/* Bottom Copyright */}
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Doitrocket IT Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
