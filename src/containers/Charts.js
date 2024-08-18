import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import Chart from "react-apexcharts";
import { CustomCard } from "../components";
import {
  getSalesChartData,
  getSalesChartOptions,
} from "../utils/helperFunctions";
import DonutChart from "./DonutChart";

const StyledButton = styled(Button)(({ selected }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: selected ? "#e0b3ff" : "#f5f5f5",
  color: selected ? "#9b59b6" : "#b3b3b3",
  margin: "0 10px",
  fontWeight: selected ? "bold" : "normal",
  minWidth: 0,
  padding: 0,
  "&:hover": {
    backgroundColor: "#e0b3ff",
    color: "#9b59b6",
  },
}));

const Charts = () => {
  const [selectedRange, setSelectedRange] = useState("1D");
  const [salesDataOption, setSalesDataOptions] = useState({
    series: [],
    options: {},
  });

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  useEffect(() => {
    const salestData = getSalesChartData(selectedRange);
    setSalesDataOptions(getSalesChartOptions(salestData));
  }, [selectedRange]);

  const renderButtons = () => {
    return ["1D", "1W", "1M", "1Y"].map((range) => (
      <StyledButton
        key={range}
        onClick={() => handleRangeChange(range)}
        selected={selectedRange === range}
      >
        {range}
      </StyledButton>
    ));
  };

  return (
    <Box>
      <Grid container columns={12} spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6} lg={8}>
          <CustomCard>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  m: 2,
                  width: { xs: "90%", md: "50%" },
                }}
              >
                {renderButtons()}
              </Box>
              <Chart
                options={salesDataOption?.options}
                series={salesDataOption?.series}
                type="area"
                height={260}
              />
            </Box>
          </CustomCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomCard customStyles={{ height: "100%" }}>
            <DonutChart />
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;
