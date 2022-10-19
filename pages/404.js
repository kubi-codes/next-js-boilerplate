import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

function PageNotFound() {
  const router = useRouter();

  return (
    <Grid container justifyContent="center" height="100vh" alignItems="center">
      <Grid item md={3}>
        <Box mb="50px">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/404.svg" alt="maintenance" width="100%" />
        </Box>

        <Typography variant="h5" align="center" textTransform="uppercase">
          Page Not Found
        </Typography>
        <Box mt="15px" display="flex" justifyContent="center">
          <Button size="small" onClick={() => router.replace("/")}>
            Go Back Home
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default PageNotFound;
