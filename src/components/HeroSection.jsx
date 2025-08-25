import React from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";

const HeroSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Scoped animations
  const animations = {
    "@keyframes floatY": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-15px)" },
      "100%": { transform: "translateY(0)" }
    },
    "@keyframes floatX": {
      "0%": { transform: "translateX(0)" },
      "50%": { transform: "translateX(12px)" },
      "100%": { transform: "translateX(0)" }
    },
    "@keyframes gradientShift": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" }
    },
    "@keyframes pulse": {
      "0%": { transform: "scale(1)", opacity: 0.9 },
      "50%": { transform: "scale(1.1)", opacity: 1 },
      "100%": { transform: "scale(1)", opacity: 0.9 }
    }
  };

  return (
    <Box
      sx={{
        ...animations,
        position: "relative",
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 12 },
        bgcolor: "background.paper",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        backgroundSize: "300% 300%",
        animation: "gradientShift 8s ease infinite"
      }}
      id="home"
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Left Side Content */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, color: "#fff" }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.secondary.light,
              fontWeight: 700,
              letterSpacing: 2
            }}
          >
            WELCOME TO DOITROCKET IT SOLUTIONS
          </Typography>

          <SectionHeading sx={{ color: "#fff", fontSize: { xs: "2rem", md: "3rem" } }}>
            Empowering Your<br/> Digital Growth
          </SectionHeading>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#e6e6e6",
              maxWidth: 600,
              mt: 2,
              mx: { xs: "auto", md: 0 }
            }}
          >
            At Doitrocket IT Solutions, we build modern websites, boost visibility
            through SEO, and create stunning brand experiences.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={4}
          >
            <AppButton variant="contained" color="secondary" href="#contact">
              Get Started
            </AppButton>
            <AppButton variant="outlined" color="inherit" href="#services">
              Learn More
            </AppButton>
          </Stack>
        </Box>

        {/* Right Side Illustration */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 520 520"
            sx={{
              width: { xs: 280, sm: 360, md: 420 },
              height: "auto"
            }}
          >
            {/* Outer Gradient Halo */}
            <defs>
              <radialGradient id="outerHalo" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={theme.palette.secondary.main} />
                <stop offset="100%" stopColor={theme.palette.primary.main} />
              </linearGradient>
            </defs>

            <circle cx="260" cy="260" r="240" fill="url(#outerHalo)" />

            {/* Floating Glass Cards */}
            <g style={{ animation: "floatY 5s ease-in-out infinite" }}>
              <rect x="120" y="150" rx="14" width="280" height="200" fill="#fff" opacity="0.9" />
              <text
                x="160"
                y="200"
                fontSize="16"
                fontWeight="600"
                fill={theme.palette.text.primary}
              >
                🚀 Digital Solutions
              </text>
              <text
                x="160"
                y="230"
                fontSize="14"
                fill={theme.palette.text.secondary}
              >
                Websites | Marketing | SEO
              </text>
            </g>

            {/* Line Chart */}
            <polyline
              points="140,300 180,260 220,280 260,230 300,250 340,210 380,220"
              fill="none"
              stroke="url(#chipGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animation: "floatX 6s ease-in-out infinite" }}
            />

            {/* Floating Stat Badges */}
            <g style={{ animation: "pulse 3s ease-in-out infinite" }}>
              <rect x="60" y="240" rx="12" width="110" height="38" fill="#fff" opacity="0.9" />
              <text x="75" y="265" fontSize="12" fill={theme.palette.text.primary}>
                250+ Projects
              </text>
            </g>

            <g style={{ animation: "pulse 3.5s ease-in-out infinite" }}>
              <rect x="360" y="160" rx="12" width="120" height="38" fill="#fff" opacity="0.9" />
              <text x="375" y="185" fontSize="12" fill={theme.palette.text.primary}>
                85% Growth 📈
              </text>
            </g>

            {/* Decorative Nodes */}
            <circle cx="120" cy="140" r="7" fill={theme.palette.secondary.main} style={{ animation: "pulse 2s infinite" }} />
            <circle cx="420" cy="340" r="7" fill={theme.palette.primary.main} style={{ animation: "pulse 2.5s infinite" }} />
          </Box>
        </Box>
      </Box>

      {/* Subtle Gradient Blobs */}
      {isMdUp && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: "-15%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: `${theme.palette.secondary.main}33`,
              filter: "blur(120px)",
              zIndex: 1
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-10%",
              right: "-10%",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: `${theme.palette.primary.main}33`,
              filter: "blur(140px)",
              zIndex: 1
            }}
          />
        </>
      )}
    </Box>
  );
};

export default HeroSection;
