import React from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  useMediaQuery
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AOS from "aos";
import "aos/dist/aos.css";

import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";
import { useTheme } from "@mui/material/styles";

AOS.init();

const ContactUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              <AppButton variant="contained" color="primary" type="submit" fullWidth>
                Send Message
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
              <PhoneIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">+91 9981255949</Typography>
            </Stack>
{/* 
            <Stack direction="row" spacing={2} alignItems="flex-start" mt={2}>
              <LocationOnIcon sx={{ color: "secondary.main", mt: "4px" }} />
              <Typography variant="body1">
                Doitrocket IT Solutions,
                <br />
                New Delhi, India
              </Typography>
            </Stack> */}

            {/* <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <AccessTimeIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">Mon - Fri: 10 AM to 6 PM</Typography>
            </Stack> */}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
