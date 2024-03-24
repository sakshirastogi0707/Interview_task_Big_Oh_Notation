"use client";
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, styled } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200, align: "center" },
  { field: "firstName", headerName: "First Name", width: 200, align: "center" },
  { field: "lastName", headerName: "Last Name", width: 150, align: "center" },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "number",
    width: 120,
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 200,
    align: "center",
  },
  { field: "address", headerName: "Address", width: 200, align: "center" },
];

const StyledContainer = styled(Container)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  paddingBlock: "5%",
}));

const UsersList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const userDataString = localStorage.getItem("users");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUsersData(userData);
    }
  }, []);

  return (
    <StyledContainer>
      {usersData==undefined ?  <DataGrid
        style={{ width: "100%" }}
        rows={usersData}
        columns={columns}
        autoPageSize
      />: "Data not found!"}
     
    </StyledContainer>
  );
};

export default UsersList;
