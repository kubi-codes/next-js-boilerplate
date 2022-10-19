import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

function Maintenance() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        height="100vh"
        alignItems="center"
      >
        <Grid item md={3}>
          <Box mb="50px">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/maintenance.svg" alt="maintenance" width="100%" />
          </Box>

          <Typography variant="h5" align="center" textTransform="uppercase">
            Page Under maintenance
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Maintenance;
