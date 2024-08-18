import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { CustomCard } from "../components";
import { KPICardStyle } from "../constants";

import UPIcon from "../static/svg/up.svg";
import DownIcon from "../static/svg/down.svg";

const KPIContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const KPIIconContainer = styled(Box)({
  flexShrink: 0,
});

const KPITextContainer = styled(Box)({
  flexGrow: 1,
  marginLeft: "16px",
  marginRight: "16px",
});

const KPITrendText = styled(Typography)(({ trend }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "14.52px",
  textAlign: "left",
  color: trend === "up" ? "#027A48" : "#C92035",
}));

const KPIAmountText = styled(Typography)(({ color }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "20.75px",
  fontWeight: 700,
  lineHeight: "25.11px",
  textAlign: "left",
  color: color,
  marginTop: "16px",
}));

const KPIs = ({ data }) => {
  const KPIContentBuilder = (kpi) => {
    return (
      <>
        <KPIContainer>
          <KPIIconContainer>
            <img src={kpi.icon} alt={kpi.title} />
          </KPIIconContainer>

          <KPITextContainer>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19.36px",
                textAlign: "left",
              }}
            >
              {kpi.title}
            </Typography>
          </KPITextContainer>

          <KPIIconContainer>
            <KPITrendText trend={kpi.trend}>
              {kpi.percentage}%
              <img src={kpi.trend === "up" ? UPIcon : DownIcon} alt="trend" />
            </KPITrendText>
          </KPIIconContainer>
        </KPIContainer>

        <KPIAmountText color={kpi.color}>
          {kpi.currency} {kpi.amount}.
          <span style={{ fontSize: "10.37px", fontWeight: 600 }}>
            {kpi.cents}
          </span>
        </KPIAmountText>
      </>
    );
  };

  return (
    <Grid container columns={12} spacing={2} sx={{ marginTop: 1 }}>
      {data.map((kpi, index) => (
        <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
          <CustomCard customStyles={KPICardStyle}>
            {KPIContentBuilder(kpi)}
          </CustomCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default KPIs;
