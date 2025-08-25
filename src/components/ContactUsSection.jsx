import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AOS from "aos";
import "aos/dist/aos.css";

import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";
import { useTheme } from "@mui/material/styles";

AOS.init();

const ContactUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle WhatsApp message send
  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending!");
      return;
    }

    const phoneNumber = "919981255949"; // ✅ Add your WhatsApp number here
    const text = `Hello Doitrocket Team! 👋\n\nI have a query:\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.paper" }} id="contact">
      <SectionHeading data-aos="fade-up">Contact Us</SectionHeading>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 4,
          justifyContent: "center",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Contact Form */}
        <Box flex={1} minWidth={300}>
          <Paper sx={{ p: 4, borderRadius: 2, backgroundColor: "background.paper" }}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="subject"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
              />
              <AppButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSendMessage}
              >
                Send via WhatsApp
              </AppButton>
            </Box>
          </Paper>
        </Box>

        {/* Contact Info */}
        <Box flex={1} minWidth={300}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "text.primary",
              color: "background.paper",
              height: "100%",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: "secondary.main" }}>
              Our Contact Details
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <EmailIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">contact@doitrocket.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <EmailIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">doitrocket@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <PhoneIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">+91 99812 55949</Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
