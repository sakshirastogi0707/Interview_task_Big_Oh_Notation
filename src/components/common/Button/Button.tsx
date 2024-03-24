import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  title: string;
  variant: "contained" | "outlined";
  disabled?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  title,
  type = "button",
  variant,
  disabled,
}) => {
  return (
    <Button type={type} onClick={onClick} variant={variant} disabled={disabled}>
      {title}
    </Button>
  );
};
