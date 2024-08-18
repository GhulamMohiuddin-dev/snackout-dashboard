import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

const DrawerItem = ({ item, open, setOpen }) => {

  return (
    <ListItem key={item.text} sx={{ height: "40px", marginBottom: "8px" }}>
      <ListItemButton onClick={setOpen} sx={{ gap: "16px", height: "40px" }}>
        {item.icon && (
          <ListItemIcon sx={{ minWidth: "20px", minHeight: "20px" }}>
            <img src={item.icon} alt={item.text} title={item.text} />
          </ListItemIcon>
        )}

        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            sx: {
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              textAlign: "left",
            },
          }}
        />
        {item.hasMore ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
