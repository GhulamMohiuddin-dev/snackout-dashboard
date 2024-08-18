import React from "react";
import { Box } from "@mui/material";

import LogoIcon from "../logo.svg";

const Logo = () => {
  return (
    <Box height={70} sx={{display: "flex", justifyContent: "center", m: 2}}>
      <img src={LogoIcon} alt="Snackout" title="Snackout" />
    </Box>
  );
};

export default Logo;
