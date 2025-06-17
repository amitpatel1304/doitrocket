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

AOS.init();

const teamMembers = [
  {
    name: "Ravi Verma",
    role: "CEO & Founder",
    image: "/images/team1.jpg",
    bio: "Visionary leader driving innovation across all departments.",
    linkedin: "https://linkedin.com/in/raviverma",
  },
  {
    name: "Anjali Sharma",
    role: "UI/UX Designer",
    image: "/images/team2.jpg",
    bio: "Designing clean and modern interfaces for web and mobile apps.",
    linkedin: "https://linkedin.com/in/anjalisharma",
  },
  {
    name: "Mohit Singh",
    role: "Marketing Head",
    image: "/images/team3.jpg",
    bio: "Leads our growth strategy through digital marketing and SEO.",
  },
  {
    name: "Priya Nair",
    role: "Full Stack Developer",
    image: "/images/team4.jpg",
    bio: "Develops efficient, scalable applications with React and Laravel.",
    github: "https://github.com/priyanair",
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
