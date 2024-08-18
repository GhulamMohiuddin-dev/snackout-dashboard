import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const KPIContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const KPIIconContainer = styled(Box)({
  flexShrink: 0,
});

export const KPITextContainer = styled(Box)({
  flexGrow: 1,
  marginLeft: "16px",
  marginRight: "16px",
});

export const KPITrendText = styled(Typography)(({ trend }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "14.52px",
  textAlign: "left",
  color: trend === "up" ? "#027A48" : "#C92035",
}));

export const KPIAmountText = styled(Typography)(({ color }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "20.75px",
  fontWeight: 700,
  lineHeight: "25.11px",
  textAlign: "left",
  color: color,
  marginTop: "16px",
}));

export const KPITitleText = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "19.36px",
  textAlign: "left",
});
