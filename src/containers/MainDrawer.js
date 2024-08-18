import React, { useEffect, useState } from "react";
import { Drawer, List, Collapse, IconButton } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { drawerWidth, MENU } from "../constants";
import { DrawerItem, Logo, SearchBar } from "../components";

const MainDrawer = () => {
  const [open, setOpen] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const countTotalItems = (menu) => {
      let count = 0;

      const countItems = (items) => {
        items.forEach((item) => {
          count += 1;
          if (item.children) {
            countItems(item.children);
          }
        });
      };

      countItems(menu);
      return count;
    };

    const total = countTotalItems(MENU);
    const falseArray = new Array(total).fill(true);
    setOpen(falseArray);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (index) => {
    setOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const buildMenuItem = (menuItem, menuIndex) => {
    return (
      <div key={menuIndex}>
        <DrawerItem
          item={menuItem}
          open={open[menuItem.id]}
          setOpen={() => handleChange(menuItem.id)}
        />
        {menuItem.hasMore && (
          <Collapse
            sx={{ p: 0, pl: 4.5 }}
            in={open[menuItem.id]}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              {menuItem.children &&
                menuItem.children.map((child, index) =>
                  buildMenuItem(child, index)
                )}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  const drawerContent = (
    <>
      <Logo />
      <SearchBar />
      {open?.length > 0 ? (
        <List>
          {MENU.map((menuItem, index) => buildMenuItem(menuItem, index))}
        </List>
      ) : null}
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                position: "fixed",
                top: 20,
                left: 16,
                zIndex: 1300,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            // ref={drawerRef}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                zIndex: 1200,
                overflowY: "auto", // Allows for scrolling
                "&::-webkit-scrollbar": {
                  display: "none", // Hides the scrollbar on WebKit browsers
                },
                msOverflowStyle: "none", // Hides the scrollbar on IE and Edge
                scrollbarWidth: "none", // Hides the scrollbar on Firefox
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              overflowY: "auto", // Allows for scrolling
              "&::-webkit-scrollbar": {
                display: "none", // Hides the scrollbar on WebKit browsers
              },
              msOverflowStyle: "none", // Hides the scrollbar on IE and Edge
              scrollbarWidth: "none",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default MainDrawer;
