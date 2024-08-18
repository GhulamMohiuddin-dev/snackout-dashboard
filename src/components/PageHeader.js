import React from "react";
import { Box } from "@mui/material";
import { WelcomeText, SubText, DashboardText } from "../styles/HeaderStyles";

const PageHeader = () => {
  return (
    <Box width="100%">
      <WelcomeText>Welcome back, Anzish</WelcomeText>
      <SubText>Monitor the Transaction History</SubText>
      <DashboardText>Dashboard</DashboardText>
    </Box>
  );
};

export default PageHeader;
