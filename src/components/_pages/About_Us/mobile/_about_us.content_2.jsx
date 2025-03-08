import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _about_us_content_2() {
  return (
    <Box mb="80px">
      <Container>
        <Typography
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          OUR VISION
        </Typography>
        <Typography align="center">
          An ensured food security for humanity and the achievement of relevant
          Sustainable Development Goals through 
          <b>environmentally, socially, and economically</b> sustainable
          agriculture system of suboptimal wetland, lowland, and flatland.
        </Typography>
      </Container>
    </Box>
  );
}

export default _about_us_content_2;
