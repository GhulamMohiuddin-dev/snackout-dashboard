import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const TitleBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    margin: "12px",
    position: "relative",
  });

  export const TitleText = styled(Typography)({
    variant:"subtitle1",
    fontWeight:"700",
    fontSize:"16px",
    color:"#343450,"
  });