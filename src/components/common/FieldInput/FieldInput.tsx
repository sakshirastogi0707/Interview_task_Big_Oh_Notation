import React from "react";
import { FormControl, TextField, FormHelperText } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../UserInfoForm/UserFormSubmission";

interface FieldInputProps {
  placeholder: string;
  errors?: FieldErrors<FormData>;
  name: string;
  type: string;
  value?: string | number;
  register: UseFormRegister<FormData>; 
}

const FieldInput: React.FC<FieldInputProps> = ({
  placeholder,
  errors,
  name,
  type,
  value,
  register,
}) => {
 
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
    </FormControl>
  );
};

export default FieldInput;
