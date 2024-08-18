import React from "react";
import { Box, Grid } from "@mui/material";

import { CustomCard, PageHeader } from "../components";
import KPIs from "./KPIs";

import { KPIData } from "../data";
import Charts from "./Charts";
import BookingCard from "../components/cards/BookingCard";
import OrderedCard from "../components/cards/OrderedCard";
import CustomerCard from "../components/cards/CustomerCard";

const MainContent = () => {
  return (
    <Box paddingTop={3} marginBottom={4}>
      <PageHeader />
      <KPIs data={KPIData} />
      <Charts />
      <Grid container columns={12} spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard customStyles={{ height: "100%" }}>
            <BookingCard />
          </CustomCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard customStyles={{ height: "100%" }} >
            <OrderedCard />
          </CustomCard>
        </Grid>

        <Grid item xs={12} lg={4} >
          <CustomCard customStyles={{ height: "100%" }}>
            <CustomerCard />
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
