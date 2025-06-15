import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import SectionHeading from "./reusable/SectionHeading";
import AppButton from "./reusable/AppButton";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const blogs = [
  {
    id: 1,
    title: "5 Web Design Trends You Can’t Ignore in 2025",
    excerpt: "Stay ahead with modern design practices that elevate your brand and engage users...",
    image: "/images/blog1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Why SEO is the Backbone of Online Success",
    excerpt: "Learn how SEO strategies can transform your visibility and grow your audience...",
    image: "/images/blog2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "The Power of Digital Marketing for Startups",
    excerpt: "Unlock the potential of digital marketing to generate leads and boost conversions...",
    image: "/images/blog3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "React vs Laravel: Which to Use for Business Sites?",
    excerpt: "Explore the pros and cons of combining Laravel backends with React frontends.",
    image: "/images/blog4.jpg",
    link: "#",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,       // 👈 shows 3 blogs
  slidesToScroll: 1,     // 👈 scrolls 1 blog at a time
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const BlogSection = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "background.paper" }} id="blog">
      <SectionHeading data-aos="fade-up">Latest From Our Blog</SectionHeading>

      <Box mt={4} data-aos="fade-up" data-aos-delay="100">
        <Slider {...sliderSettings}>
          {blogs.map((blog, index) => (
            <Box key={blog.id} px={2} display="flex" justifyContent="center">
              <Card
                elevation={3}
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", fontWeight: 600 }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, mb: 2, color: "text.secondary" }}
                  >
                    {blog.excerpt}
                  </Typography>
                  <AppButton
                    href={blog.link}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    Read More
                  </AppButton>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default BlogSection;
