import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Stack,
  Paper,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import qrCode from "../assets/images/qr-code.jpg";
import bookCover1 from "../assets/images/artiictamol.jpg";
import bookCover2 from "../assets/images/artiictamol1.jpg";

import recBook1 from "../assets/images/book1.jpg";

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Articitamol = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(bookCover1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, mobile, email, address, postalCode } = formData;
    if (!name || !mobile || !email || !address || !postalCode) {
      alert("⚠️ Please fill in all the fields before booking!");
      return;
    }

    const whatsappNumber = "917509111934"; 
    const message = `*New Book Pre-Booking* 📚\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nAddress: ${address}\nPostal Code: ${postalCode}\n\n*Please pay the booking amount and send the screenshot!*`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "background.default" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT IMAGE GALLERY */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          {/* Thumbnails */}
          <Stack spacing={2}>
            {[bookCover1, bookCover2].map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`Thumbnail ${index}`}
                sx={{
                  width: 70,
                  height: 90,
                  objectFit: "cover",
                  borderRadius: 1,
                  border: selectedImage === img ? "2px solid #008080" : "1px solid #ccc",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </Stack>

          {/* Main Image */}
          <Box
            component="img"
            src={selectedImage}
            alt="Book Cover"
            sx={{
              width: { xs: "90%", md: 350 },
              height: 450,
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 5,
              ml: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>

        {/* RIGHT PRODUCT DETAILS */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            Articitamol
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, color: "text.secondary" }}>
            The Medicine of Loveria
          </Typography>

          {/* Price Section */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{ color: "secondary.main", fontWeight: 700 }}
            >
              ₹250
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              ₹310
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          {/* CTA BUTTON */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 5,
              py: 1.5,
              boxShadow: 3,
            }}
          >
            Pre-Book Now
          </Button>
        </Box>
      </Box>

      {/* RECOMMENDATION SECTION */}
      {/* <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Recommended Books
        </Typography>
        <Stack direction="row" spacing={3} sx={{ overflowX: "auto", pb: 2 }}>
          {[recBook1].map((book, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 180,
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={book}
                alt={`Book ${index + 1}`}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  An Extra Marriatal Affiar
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ mt: 1 }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box> */}

      {/* POPUP FORM */}
      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Paper
          sx={{
            width: { xs: "90%", sm: 450 },
            p: 2,
            borderRadius: 3,
            boxShadow: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Pre-Book Your Copy 📚
          </Typography>
          <Stack spacing={1}>
            <TextField label="Full Name *" name="name" value={formData.name} onChange={handleChange} required fullWidth />
            <TextField label="Mobile Number *" name="mobile" value={formData.mobile} onChange={handleChange} required fullWidth />
            <TextField label="Email ID *" name="email" value={formData.email} onChange={handleChange} required fullWidth />
            <TextField label="Address *" name="address" value={formData.address} onChange={handleChange} required fullWidth multiline />
            <TextField label="Postal Code *" name="postalCode" value={formData.postalCode} onChange={handleChange} required fullWidth />

            {/* QR Code */}
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Scan & Pay the Booking Amount
              </Typography>
              <Box component="img" src={qrCode} alt="QR Code" sx={{ width: 150, height: 150}} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                After payment, send your screenshot on WhatsApp to confirm.
              </Typography>
            </Box>

            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 1 }}>
              Book Now
            </Button>
          </Stack>
        </Paper>
      </StyledModal>
    </Box>
  );
};

export default Articitamol;
