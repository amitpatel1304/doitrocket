import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const FloatingActions = () => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setExpanded(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const handleClick = (type) => {
    if (expanded === type) {
      if (type === "whatsapp") {
        window.open("https://wa.me/917805058023", "_blank");
      } else if (type === "phone") {
        window.location.href = "tel:+919981255949";
      }
    } else {
      setExpanded(type);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 9999,
      }}
    >
      {/* WhatsApp Button */}
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Paper
          onClick={() => handleClick("whatsapp")}
          sx={{
            px: expanded === "whatsapp" ? 2 : 1,
            py: 1,
            borderRadius: "40px 0 0 40px",
            backgroundColor: "#25D366",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            ml: "auto",
            animation: `${pulse} 2s infinite`,
          }}
          elevation={4}
        >
          <WhatsAppIcon />
          {expanded === "whatsapp" && (
            <Typography variant="body2" ml={1}>
              Chat on WhatsApp
            </Typography>
          )}
        </Paper>
      </Tooltip>

      {/* Phone Button */}
      <Tooltip title="Call Now" placement="left">
        <Paper
          onClick={() => handleClick("phone")}
          sx={{
            px: expanded === "phone" ? 2 : 1,
            py: 1,
            borderRadius: "40px 0 0 40px",
            backgroundColor: "#D32F2F",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            ml: "auto",
            animation: `${pulse} 2s infinite`,
          }}
          elevation={4}
        >
          <PhoneIcon />
          {expanded === "phone" && (
            <Typography variant="body2" ml={1}>
              Call Now
            </Typography>
          )}
        </Paper>
      </Tooltip>
    </Box>
  );
};

export default FloatingActions;
