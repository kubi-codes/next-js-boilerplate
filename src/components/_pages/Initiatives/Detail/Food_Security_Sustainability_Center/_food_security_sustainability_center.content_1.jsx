import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _food_security_sustainability_center_content_1() {
  return (
    <Box pt="150px" mb="100px">
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid size={{ md: 6 }}>
            <Box
              component="img"
              src="/images/bg-food-security-and-sustainability-center.png"
              width="45vw"
              height="600px"
              position="absolute"
              left="0px"
            />
            <Box height="600px"></Box>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Typography>
              FOSTER is an inspiring initiative spearheaded by YBDA (Yayasan
              Bahtera Dwipa Abadi) and TJF in partnership as a research
              organization.
              <br />
              <br />
              This project aims to unlock the potential of tidal swamp land in
              the Indragiri Hilir Regency to ensure food security at local,
              regional, and national levels.
              <br />
              <br />
              Despite the location’s technical and non-technical challenges,
              FOSTER is committed to establishing a research center that will
              serve as a beacon of hope for the local community. Through
              testing, training, and the development of innovative practices,
              this center will help cultivate food crops, livestock, and
              freshwater aquaculture, ultimately improving the lives of many.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _food_security_sustainability_center_content_1;
