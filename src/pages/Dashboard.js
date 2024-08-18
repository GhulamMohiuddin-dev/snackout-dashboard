import React from 'react';
import { Box, Container,useTheme, useMediaQuery } from '@mui/material';
import { MainContent, MainDrawer } from '../containers';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display: 'flex', marginLeft: isMobile && "30px"}}>
      <MainDrawer />
      <Container
        component="main"
        sx={{overflow: 'hidden'}}
      >
        <MainContent />
      </Container>
    </Box>
  );
}

export default Dashboard;
