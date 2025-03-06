import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _food_security_content_3() {
  return (
    <Box mb="200px">
      <Container>
        <Grid container justifyContent="space-between" mt="80px">
          <Grid size={{ md: 3 }}>
            <Typography>
              Environmentally, the WMT is evident to enable our lands to be fire
              proof. It ensures our lands to receive the amount of water needed
              to keep the soil moisturized while slows down subsidence and
              abrasion as the dikes and water gates minimize the rain to erode
              the topsoil. <br />
              <br />
              The WMT also ensures the provision of freshwater supply, that is a
              vital for regulating all economic activities in the vicinity,
              including the agricultural development, industrial operation, and
              human survival. <br />
              <br />
              These impacts of WMT supports the idea that cultivating suboptimal
              land is more viable in a long run compared to expanding arable
              land in a habitable or densely-populated area. The process may
              require higher initial investments for making the land less acidic
              and building basic infrastructures. However, afterward, it
              produces a better quality of arable land and requires less
              maintenance expenditure in the long run.
            </Typography>
          </Grid>

          <Grid size={{ md: 9 }}>
            <Box
              position="absolute"
              right="0px"
              width="58vw"
              height="320px"
              marginTop="320px"
              sx={{
                backgroundImage: `url('/images/image.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              position="absolute"
              right="0px"
              width="29vw"
              height="320px"
              sx={{
                backgroundImage: `url('/images/image-1.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              position="absolute"
              width="29vw"
              height="320px"
              right="29vw"
              sx={{
                backgroundImage: `url('/images/image-2.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _food_security_content_3;
