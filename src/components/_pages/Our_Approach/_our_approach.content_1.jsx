import React from "react";
import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";

function Our_approach_content_1() {
  return (
    <>
      <Box>
        <Container sx={{ pt: "150px", mb: "250px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid size={{ md: 7 }}>
              <Box
                component="img"
                src="/images/Frame 101.png"
                width="50vw"
                height="700px"
                position="absolute"
                sx={{ objectFit: "cover" }}
                left="0px"
              />
              <Box height="600px"></Box>
            </Grid>
            <Grid size={{ md: 5 }}>
              <Typography variant="h1" color="primary" gutterBottom>
                WHAT <br />
                WE DO
              </Typography>
              <Typography>
                Tay Juhana Foundation believes that we can pursue global food
                security by enabling sustainable agriculture practice in
                suboptimal lands that is most benefitting the environment,
                social, and economy dimensions for the surrounding area. In
                spreading the message, we aim to disseminate its knowledge and
                technology by providing advisory service, particularly to
                develop, adapt, and implement the practices in other similar
                places.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Our_approach_content_1;
