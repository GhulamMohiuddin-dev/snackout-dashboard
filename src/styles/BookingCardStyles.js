import {  Box,  Chip, Avatar } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const BookingAvatar = styled(Avatar)({
  background: "#E9CAFC",
  color: "#343450",
  marginRight: "16px",
  fontSize: "9.29px",
  width: "32px",
  height: "32px",
});

export const InfoBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const BookingDetailsBox = styled(Box)({
  marginRight: "20px",
});

export const BookingChip = styled(Chip)(({ chipColor }) => ({
  borderRadius: "0px 6px 0px 3px",
  background: chipColor,
  height: "20px",
  color: "#fff",
  fontSize: "9px",
  fontWeight: "bold",
  position: "absolute",
  top: "-2px",
  right: "-2px",
  margin: 0,
}));