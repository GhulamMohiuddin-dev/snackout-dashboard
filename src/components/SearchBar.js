import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

// Styled Components
const StyledTextField = styled(TextField)({
  margin: "16px",
  height: "40px",
  "& .MuiOutlinedInput-root": {
    height: "40px",
    borderRadius: 8,
    backgroundColor: "#EFEFF1",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#ccc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ccc",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "black",
      opacity: 1,
    },
  },
});

const SearchBar = () => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
