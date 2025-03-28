import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

function Our_approach_content_2() {
  return (
    <Container sx={{ mb: "150px" }}>
      <Box width="70%" mx="auto">
        <Typography align="center">
          In carrying the missions, we are simultaneously reaching out the
          targeted stakeholder. Besides using the online media platforms, we
          have been actively participating in events, strengthening our internal
          capacity, and building partnerships. By doing so, our findings and
          messages are accessible for the broader public, and all can benefit
          from the information and knowledge.
          <br /> <br />
          We always aim to work together with a range of relevant stakeholders
          to generate impacts both locally and globally. The stakeholders might
          include but not limited to:
        </Typography>
      </Box>

      <Box width="70%" mx="auto" mt="50px">
        <Grid container>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              Government
            </Typography>
          </Grid>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              NGO
            </Typography>
          </Grid>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              Academic Institution
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box width="70%" mx="auto" mt="50px">
        <Grid container>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              Media
            </Typography>
          </Grid>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              Community
            </Typography>
          </Grid>
          <Grid
            size={{ md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgcolor="lightgray"
              width="105px"
              height="105px"
              sx={{ mb: "20px" }}
            />
            <Typography variant="h5" color="primary">
              Private Sector
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Our_approach_content_2;
