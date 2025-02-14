import { Container, Grid2 as Grid, Box, Typography, Button } from "@mui/material";
import React from "react";

function _about_us_content_5() {
  return (
    <Box
      mb="150px"
      py="50px"
      sx={{
        backgroundImage: "url('/images/bg-grid.png')",
        zIndex: -2,
      }}
    >
      <Container>
        <Grid justifyContent="space-between" alignItems="center" container>
          <Grid size={{ md: 7 }}>
            <Typography variant="h1" color="primary">
              READ OUR STORY ABOUT FOOD FIGHTERS!
            </Typography>
          </Grid>
          <Grid size={{ md: 3 }}>
            <Box bgcolor={(props) => props.palette.warning.main} padding="20px">
              <Button sx={{fontSize: '24px', color: '#fff'}} endIcon={<img src="/icons/circle-arrow-right-white.svg" alt="icons" width="20px" />}>
                Read Here
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _about_us_content_5;
