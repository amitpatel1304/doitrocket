import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
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
    title: "How to Build Responsive Websites with React",
    excerpt: "Explore essential techniques for mobile-first and responsive development in 2025...",
    image: "/images/blog4.jpg",
    link: "#",
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BlogSection = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "#f4f4f4" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#c62828", fontWeight: "bold" }}
        data-aos="fade-up"
      >
        Latest From Our Blog
      </Typography>

      <Box mt={4} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <Slider {...settings}>
          {blogs.map((blog) => (
            <Box key={blog.id} px={2}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
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
                  <Typography variant="h6" sx={{ color: "#212121", fontWeight: 600 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, mb: 2, color: "#555" }}>
                    {blog.excerpt}
                  </Typography>
                  <Button
                    href={blog.link}
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Read More
                  </Button>
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
