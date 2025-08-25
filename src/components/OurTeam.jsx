import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionHeading from "./reusable/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import amit from "../assets/images/amit.jpg";
import prashant from "../assets/images/prashant.png";

AOS.init();

const teamMembers = [
  {
    name: "Amit Patel",
    role: "Managing Director & Developer",
    image: amit,
    bio: "Visionary leader driving innovation across all departments.",
    // linkedin: "https://linkedin.com/in/raviverma",
  },
  {
    name: "Prashant Patel",
    role: "Markeing Head & Digital Strategist",
    image: prashant,
    bio: "Leads our growth strategy through digital marketing and SEO.",
    // linkedin: "https://linkedin.com/in/anjalisharma",
  },
  {
    name: "Ishika Patel",
    role: "Content Creator & SEO Specialist",
    image: "/images/team3.jpg",
    bio: "Leads our growth strategy through digital marketing and SEO.",
  },
  {
    name: "Mukesh Tak",
    role: "Full Stack Developer",
    image: "/images/team4.jpg",
    bio: "Develops efficient, scalable applications",
    // github: "https://github.com/priyanair",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.paper" }} id="team">
      <SectionHeading data-aos="fade-up">Meet Our Team</SectionHeading>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {teamMembers.map((member, index) => (
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
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {member.bio}
              </Typography>
              <Stack direction="row" spacing={1} mt={1}>
                {member.linkedin && (
                  <IconButton
                    href={member.linkedin}
                    target="_blank"
                    sx={{ color: "secondary.main" }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                )}
                {member.github && (
                  <IconButton
                    href={member.github}
                    target="_blank"
                    sx={{ color: "secondary.main" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
