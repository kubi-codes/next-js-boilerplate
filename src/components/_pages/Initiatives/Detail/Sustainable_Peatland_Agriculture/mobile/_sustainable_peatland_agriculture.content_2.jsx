import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

function _food_security_content_2() {
  return (
    <Box mb="50px">
      <Box
        component="img"
        src="/images/bg-example.jpg"
        alt="map indonesia"
        width="100%"
        height="200px"
        left="0px"
        sx={{ objectFit: "cover", mb: "20px" }}
      />

      <Container>
        <Box
          bgcolor={(props) => props.palette.warning.main}
          display="inline-block"
          pt={1}
          pb={0.5}
          paddingX={2}
          mb={1}
        >
          <Typography color="#fff">Sustainable Peatland Agriculture</Typography>
        </Box>
        <Typography variant="h5" color="primary" sx={{ mb: 1, mt: 1 }}>
          The Canals
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Our man made canals consist of the primary, secondary, and tertiary
          canals that add up to more than 8.000 km in total. It made available
          more than 25 million m3 volume of freshwater all year round. These
          canals hold four main functions:
          <br />
          <br />
          1. Water retention/reservoir <br />
          2.Fire mitigation <br />
          3.Freshwater supplu for all purposes <br />
          4.Transportation of people and harvested crops.
        </Typography>
      </Container>
    </Box>
  );
}

export default _food_security_content_2;
