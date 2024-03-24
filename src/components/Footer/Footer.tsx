"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Copyright from "../common/Copyright/Copyrigth";
import { Box } from "@mui/material";
import theme from "@/theme/colors";

const Footer = () => {
  const StyledFooter = styled(Box)(() => ({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: `${theme.palette.primary.dark}`,
    paddingBlock: '1rem'
  }));
  return (
    <StyledFooter>
      <footer>
        <Copyright />
      </footer>
    </StyledFooter>
  );
};

export default Footer;
