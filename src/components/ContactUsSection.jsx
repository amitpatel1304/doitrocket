import React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ContactUsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }} id="contact">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#c62828", fontWeight: "bold" }}
        data-aos="fade-up"
      >
        Contact Us
      </Typography>

      <Box
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 4,
          maxWidth: "1300px",
          mx: "auto",
          mt: 4,
          px: { xs: 2, md: 4 }
        }}
      >
        {/* Contact Form */}
        <Paper
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 2,
            backgroundColor: "#f9f9f9"
          }}
        >
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField label="Subject" variant="outlined" fullWidth required />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button variant="contained" color="error" type="submit" fullWidth>
              Send Message
            </Button>
          </Box>
        </Paper>

        {/* Contact Info */}
        <Paper
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 2,
            backgroundColor: "#212121",
            color: "#fff"
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#e53935" }}>
            Our Contact Details
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <EmailIcon sx={{ color: "#e53935" }} />
            <Typography variant="body1">contact@doitrocket.com</Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <PhoneIcon sx={{ color: "#e53935" }} />
            <Typography variant="body1">+91 98765 43210</Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="flex-start" mt={2}>
            <LocationOnIcon sx={{ color: "#e53935", mt: "4px" }} />
            <Typography variant="body1">
              Doitrocket IT Solutions,
              <br />
              New Delhi, India
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <AccessTimeIcon sx={{ color: "#e53935" }} />
            <Typography variant="body1">Mon - Fri: 10 AM to 6 PM</Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
