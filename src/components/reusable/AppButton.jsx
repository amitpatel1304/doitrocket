
import React from "react";
import { Button } from "@mui/material";

const AppButton = ({ variant = "contained", color = "primary", children, ...props }) => {
  const commonStyles = {
    textTransform: "none",
    px: 3,
    py: 1.2,
    fontWeight: "bold",
    fontSize: "1rem",
    borderWidth: 2,
    borderRadius: 6,
  };

  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        ...commonStyles,
        ...(variant === "outlined" && {
          "&:hover": {
            backgroundColor: "rgba(255, 0, 0, 0.05)",
            borderColor: "secondary.main",
          },
        }),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AppButton;
