import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

function PageNotFound() {
  const router = useRouter();

  return (
    <Grid container justifyContent="center" height="100vh" alignItems="center">
      <Grid item md={3}>
        <Typography
          variant="h1"
          align="center"
          fontWeight={900}
          sx={{ fontSize: "90px" }}
          gutterBottom
        >
          404
        </Typography>
        <Typography
          variant="h5"
          align="center"
          textTransform="uppercase"
          sx={{ mb: "50px", display: "block" }}
        >
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
