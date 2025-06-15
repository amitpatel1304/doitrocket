import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Rating
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const testimonials = [
  {
    name: "Jane Doe",
    photo: "/images/jane.jpg",
    text: "Doitrocket helped us build a scalable web platform that increased our customer retention by 35%.",
    video: "https://youtu.be/sample-video",
    url: "https://janedoe.com",
    rating: 5
  },
  {
    name: "John Smith",
    photo: "/images/john.jpg",
    text: "Amazing experience with the team! From design to deployment, everything was smooth and quick.",
    video: null,
    url: "https://johnsmith.io",
    rating: 4.5
  },
  {
    name: "Emily Johnson",
    photo: "/images/emily.jpg",
    text: "Their SEO and marketing expertise brought us to Google's front page in just 2 months!",
    video: "https://youtu.be/sample-video2",
    url: "https://emilyjohnson.dev",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#c62828', fontWeight: 'bold' }}>
        What Our Clients Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Card
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
            >
              {/* Left: Photo + Video + Link */}
              <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{ minWidth: { md: 200 }, textAlign: 'center' }}
              >
                <Avatar
                  alt={item.name}
                  src={item.photo}
                  sx={{
                    width: 90,
                    height: 90,
                  }}
                />
                {item.video && (
                  <Button
                    href={item.video}
                    target="_blank"
                    startIcon={<PlayCircleIcon />}
                    variant="contained"
                    color="error"
                    size="small"
                  >
                    Watch Video
                  </Button>
                )}
                <Button
                  href={item.url}
                  target="_blank"
                  size="small"
                  variant="outlined"
                  color="secondary"
                >
                  Visit Site
                </Button>
              </Stack>

              {/* Right: Name + Text + Rating */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {item.name}
                </Typography>
                <Rating name="read-only" value={item.rating} precision={0.5} readOnly sx={{ mb: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsCarousel;
