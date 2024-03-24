"use client";
import React, { FormEventHandler } from "react";
import { Container, FormControl, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../common/Button/Button";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormData } from "../../types/common/interfaces";
import { formValidations } from "../validations/FormValidations";

interface UserFormProps {
  register: UseFormRegister<FieldValues>;
  onSubmit: FormEventHandler;
  errors: FieldErrors<FormData>;
}

const StyledContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  paddingBlock: "5%",
}));

const UserFormUI: React.FC<UserFormProps> = ({
  register,
  onSubmit,
  errors,
}) => {
  return (
    <StyledContainer>
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Add User Information
      </Typography>
      <form
        onSubmit={onSubmit}
        style={{
          width: "80%",
          paddingInline: "2rem",
          borderInline: "1px solid gray",
        }}
      >
        <FormControl fullWidth margin="normal">
          <TextField
            type="text"
            placeholder="First Name"
            {...register("firstName", formValidations.firstName)}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            type="text"
            placeholder="Last Name"
            {...register("lastName", formValidations.lastName)}
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            type="number"
            placeholder="Phone Number"
            {...register("phoneNumber", formValidations.phoneNumber)}
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber.message}</span>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            type="email"
            placeholder="Email"
            {...register("email", formValidations.email)}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            type="text"
            placeholder="Address"
            {...register("address", formValidations.address)}
          />
          {errors.address && (
            <span className="error">{errors.address.message}</span>
          )}
        </FormControl>

        <CustomButton type="submit" title="Next Step" variant="outlined" />
      </form>
    </StyledContainer>
  );
};

export default UserFormUI;
