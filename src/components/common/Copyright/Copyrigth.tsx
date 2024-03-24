import React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import theme from "@/theme/colors";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color={`${theme.palette.primary.contrastText}`}
      align="center"
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="">
        Your Website
      </MuiLink>
      {new Date().getFullYear()}.
    </Typography>
  );
}
