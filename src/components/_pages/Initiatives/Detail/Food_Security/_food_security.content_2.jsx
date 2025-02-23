import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

function _food_security_content_2() {
  return (
    <Box mb="150px">
      <Container>
        <Grid container alignItems="center">
          <Grid size={{ md: 7 }}>
            <Box
              component="img"
              src="/images/bg-example.jpg"
              alt="map indonesia"
              width="50vw"
              height="450px"
              position="absolute"
              left="0px"
              sx={{ objectFit: "cover" }}
            />
            <Box height="450px" width="100%"></Box>
          </Grid>
          <Grid size={{ md: 5 }}>
            <Box
              bgcolor={(props) => props.palette.warning.main}
              display="inline-block"
              pt={1}
              pb={0.5}
              paddingX={2}
              mb={1}
            >
              <Typography color="#fff">
                Sustainable Peatland Agriculture
              </Typography>
            </Box>
            <Typography variant="h4" color="primary" sx={{ mb: 4, mt: 1 }}>
              The Canals
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Our man made canals consist of the primary, secondary, and
              tertiary canals that add up to more than 8.000 km in total. It
              made available more than 25 million m3 volume of freshwater all
              year round. These canals hold four main functions:
              <br />
              <br />
              1. Water retention/reservoir <br />
              2.Fire mitigation <br />
              3.Freshwater supplu for all purposes <br />
              4.Transportation of people and harvested crops.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _food_security_content_2;
