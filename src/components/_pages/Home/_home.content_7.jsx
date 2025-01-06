import { Container, Typography, Box, Grid2 as Grid } from "@mui/material";
import React from "react";

function _home_content_7() {
  return (
    <Container sx={{ mb: "10vh" }}>
      <Box>
        <Typography variant="h4" color="primary" sx={{ mb: 5 }}>
          Our Partners
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid item size={{ md: 2.9 }}>
            <Box sx={{ background: "lightgrey", height: "90px" }}></Box>
          </Grid>

          <Grid item size={{ md: 2.9 }}>
            <Box sx={{ background: "lightgrey", height: "90px" }}></Box>
          </Grid>

          <Grid item size={{ md: 2.9 }}>
            <Box sx={{ background: "lightgrey", height: "90px" }}></Box>
          </Grid>

          <Grid item size={{ md: 2.9 }}>
            <Box sx={{ background: "lightgrey", height: "90px" }}></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default _home_content_7;
