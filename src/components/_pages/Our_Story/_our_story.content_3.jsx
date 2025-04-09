import React from "react";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

function _our_story_content_3() {
  return (
    <Box
      data-scroll-section
      position="relative"
      width="90vw"
      height="100vh"
      bgcolor={(props) => props.palette.primary.main}
      display="flex"
      alignItems="center"
      ml="-10vw"
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ md: 4 }}>
            <Typography
              color="warning"
              variant="h1"
              lineHeight="65px"
              sx={{ mb: "40px" }}
            >
              Meanwhile, human population is growing.
            </Typography>

            <Typography color="#fff" fontSize="20px" lineHeight="30px">
              The planet will have  more population in 2050, with almost 10
              billion people live on Earth.
            </Typography>

            <Box position="absolute" bottom={-10}>
              <Box
                component="img"
                src="/images/our-story/people-celebrating-world-population-day 1.jpg"
                height="450px"
                sx={{ ml: "-200px" }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 6 }} offset={1}>
            <Box height="750px">
              <Box component="img" src="/images/our-story/Group 153.png" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _our_story_content_3;