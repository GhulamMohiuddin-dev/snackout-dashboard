import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

export const OrderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "8px",
  margin: "6px",
  position: "relative",
});

export const ImageBox = styled(Box)({
  marginRight: "16px",
  img: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    boxShadow: "0px 6px 8px #aeabab",
  },
});

export const OrderInfoBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const OrderTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: "10.24px",
  color: "#343450",
});

export const OrderDetails = styled(Typography)({
  color: "#7D7D7D",
  fontSize: "8px",
  fontWeight: 700,
});

export const OrderPrice = styled(Typography)({
  color: "#A796E4",
  fontSize: "10.24px",
  fontWeight: 700,
});