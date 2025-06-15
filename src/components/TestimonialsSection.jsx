import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  Rating,
  IconButton,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SectionHeading from "./reusable/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const testimonials = [
  {
    name: "Arjun Mehta",
    feedback:
      "Doitrocket delivered a fast, beautiful website and helped us boost traffic through SEO.",
    image: "/images/client1.jpg",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://client1.com",
  },
  {
    name: "Sara Khan",
    feedback:
      "Their team is creative and responsive. Digital marketing efforts increased our leads by 40%.",
    image: "/images/client2.jpg",
    rating: 4,
    video: null,
    link: "https://client2.com",
  },
  {
    name: "Rahul Sharma",
    feedback:
      "Great turnaround and communication. We’re seeing major improvements in user engagement.",
    image: "/images/client3.jpg",
    rating: 5,
    video: null,
    link: "https://client3.com",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.default" }} id="testimonials">
      <SectionHeading data-aos="fade-up">What Our Clients Say</SectionHeading>

      <Box data-aos="fade-up" data-aos-delay="100" mt={4}>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Left: Image + Buttons */}
                <Box sx={{ minWidth: 80, textAlign: "center" }}>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 64, height: 64, mx: "auto" }}
                  />
                  {testimonial.video && (
                    <IconButton
                      component="a"
                      href={testimonial.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="secondary"
                      sx={{ mt: 1 }}
                    >
                      <PlayCircleOutlineIcon />
                    </IconButton>
                  )}
                  <Typography
                    variant="body2"
                    color="secondary"
                    component="a"
                    href={testimonial.link}
                    target="_blank"
                    sx={{ display: "block", mt: 1, fontSize: 12, textDecoration: "underline" }}
                  >
                    Visit Client
                  </Typography>
                </Box>

                {/* Right: Content */}
                <Box>
                  <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{ color: "primary.main" }}
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                    {testimonial.feedback}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
