import React from "react";
import { Box, Typography, Container, Grid2 as Grid } from "@mui/material";

function _our_story_content_1() {
  return (
    <Box
      data-scroll-section
      position="relative"
      width="100vw"
      height="100vh"
      bgcolor={(props) => props.palette.primary.main}
      py="50px"
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ md: 6 }}>
            <Box display="flex" alignItems="center" gap="50px" mb="100px">
              <Typography variant="h1" color="warning">
                2050
              </Typography>
              <Box
                component="img"
                src="/images/our-story/Group 166.png"
                width="520px"
              />
            </Box>

            <Box display="flex" alignItems="center" gap="50px">
              <Typography variant="h1" color="#fff">
                2010
              </Typography>
              <Box
                component="img"
                src="/images/our-story/Group 165.png"
                width="520px"
              />
            </Box>
          </Grid>
          <Grid size={{ md: 6 }} position="relative" height="90vh">
            <Box position="absolute" bottom="27vh" left="50px" zIndex={2}>
              <Typography variant="h4" color="warning" sx={{ mb: "20px" }}>
                Need
              </Typography>
              <Typography variant="h1" fontSize="96px" color="warning">
                56%
              </Typography>
              <Typography variant="h4" color="warning">
                TO FEED AN ADDITIONAL
                <br /> 3 BILLION PEOPLE
              </Typography>

              <Box display="flex" alignItems="center" gap="10px" ml="-8vw">
                <Typography color="#fff" fontSize="36px" fontWeight="bold">
                  44%
                </Typography>

                <Box width="600px" borderBottom="4px dashed #fff" />
              </Box>
            </Box>

            <Box position="absolute" bottom={0} zIndex={1} right={0}>
              <Typography color="#fff" fontSize="36px" fontWeight="bold">
                ADDITIONAL
                <br />
                FOOD PRODUCTION
              </Typography>
            </Box>

            <Box
              component="img"
              src="/images/our-story/3207a4f33c30f516a692fb1a65ec7797 (1).png"
              width="615px"
              sx={{ position: "absolute", bottom: "0px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _our_story_content_1;
