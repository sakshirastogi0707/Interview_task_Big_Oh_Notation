"use client";
import React, { FormEventHandler } from "react";
import {
  Button,
  Grid,
  Typography,
  styled,
  Container,
  IconButton,
  FormControl,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { formValidations } from "../validations/FormValidations";
import { FamilyInfo } from "../../types/common/interfaces";

const StyledContainer = styled(Container)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  paddingBlock: "5%",
}));

interface FamilyFormProps {
  onSubmit: FormEventHandler;
  removeFamilyMember: (id: number) => void;
  addFamilyMember: () => void;
  familyInfo: FamilyInfo[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FamilyInfo>;
}

const FamilyFormUI: React.FC<FamilyFormProps> = ({
  onSubmit,
  familyInfo,
  removeFamilyMember,
  addFamilyMember,
  register,
  errors,
}) => {
  return (
    <StyledContainer>
      <form
        onSubmit={onSubmit}
        style={{
          width: "80%",
          borderInline: "1px solid gray",
          paddingInline: "2rem",
        }}
      >
        {familyInfo?.map((info: FamilyInfo) => (
          <Grid container spacing={4} key={info.id}>
            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    mt={5}
                    sx={{ textTransform: "uppercase", fontWeight: "600" }}
                  >
                    Add Family Information
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ textAlign: "right" }}>
                  <IconButton onClick={() => removeFamilyMember(info.id)}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  type="text"
                  placeholder="Father/Mother Name"
                  {...register("parentNames", formValidations.parentNames)}
                />
                {errors.parentNames && (
                  <span className="error">{errors.parentNames.message}</span>
                )}
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  type="date"
                  placeholder="Date of Birth"
                  {...register("dob", formValidations.dob)}
                />
                {errors.dob && (
                  <span className="error">{errors.dob.message}</span>
                )}
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  type="text"
                  placeholder="Relationship"
                  {...register("relation", formValidations.relation)}
                />
                {errors.relation && (
                  <span className="error">{errors.relation.message}</span>
                )}
              </FormControl>
            </Grid>
          </Grid>
        ))}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Button variant="outlined" fullWidth onClick={addFamilyMember}>
              Add More Family Member
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" variant="outlined" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

export default FamilyFormUI;
