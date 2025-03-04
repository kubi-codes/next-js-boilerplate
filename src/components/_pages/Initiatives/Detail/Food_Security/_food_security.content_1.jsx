import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _food_security_content_1() {
  return (
    <Box mb="150px" mt="150px">
      <Container>
        <Typography variant="h3" align="center" color="primary">
          Pulau Burung and the Water Management Trinity
        </Typography>

        <Grid container justifyContent="space-between" mt="80px" >
          <Grid size={{ md: 3 }}>
            <Typography>
              Pulau Burung’s suboptimal land is the overlap of flatland,
              lowland, wetland, and peatland. In managing land with peat
              characteristics, water management becomes the most important
              aspect of ensuring sustainability.
              <br />
              <br />
              In his days, our founder worked on a water management system to
              address the challenge of suboptimal land. The soil is highly
              porous, which allows too much water seepage and excessive
              evaporation, which become more serious during the dry seasons. The
              Water anagement Trinity (WMT) was then established for capturing
              and keeping freshwater as a resource instead of letting it leave
              back to the ocean. <br />
              <br />
              The WMT comprises of three main components (i.e. the Canals, the
              Dams and Water Gates, and the Dikes) which supports the three
              aspects of sustainability. It is still being used until now and
              has been acknowledged as first of its kind in the world.
            </Typography>
          </Grid>

          <Grid size={{ md: 9 }}>
            <Box
              component="img"
              src="/images/bg-initiatives-1.png"
              alt="map indonesia"
              width="58vw"
              position="absolute"
              right="0px"
              marginTop="-50px"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _food_security_content_1;
