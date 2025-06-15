
import React from "react";
import { Typography } from "@mui/material";

const SectionHeading = ({ children, ...props }) => (
  <Typography
    variant="h4"
    sx={{ color: "primary.main", fontWeight: "bold", mb: 3, textAlign: "center" }}
    {...props}
  >
    {children}
  </Typography>
);

export default SectionHeading;
