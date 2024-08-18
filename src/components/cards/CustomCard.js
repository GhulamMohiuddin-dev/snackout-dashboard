import React from "react";
import { Card, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ customStyles }) => ({
  gap: "0px",
  borderRadius: "16px",
  opacity: 1,
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 0px 16px 0px #3333331A",
  ...customStyles,
}));

const StyledBox = styled(Box)({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const CustomCard = ({ customStyles, children }) => {
  return (
    <StyledCard customStyles={customStyles}>
      <StyledBox>
        {children}
      </StyledBox>
    </StyledCard>
  );
};

export default CustomCard;