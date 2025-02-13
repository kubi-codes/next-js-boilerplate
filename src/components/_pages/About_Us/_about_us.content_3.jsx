import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _about_us_content_3() {
  return (
    <Box mb="200px">
      <Container>
        <Grid container justifyContent="center" mb="50px">
          <Grid item size={{ md: 6 }}>
            <Typography
              variant="h3"
              color="primary"
              align="center"
              gutterBottom
              sx={{ mb: 5 }}
            >
              OUR MISSION
            </Typography>
            <Typography align="center">
              In order to achieve our vision, we are committed to:
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-around" rowGap={5}>
          {React.Children.toArray(
            [
              {
                img: "",
                title: "Conducting Research",
                body: "Catalyze research and development to advance sustainable agricultural innovation on suboptimal wetland, lowland, and flatland.",
              },
              {
                img: "",
                title: "Consulting",
                body: "Provide consultancy for independent and collaborative works on sustainable agriculture practice of suboptimal wetland, lowland, and flatland.",
              },
              {
                img: "",
                title: "Educating",
                body: "Educate all the relevant stakeholders on effective water management system in wetland agriculture.",
              },
              {
                img: "",
                title: "Advocating",
                body: "Facilitate the advocacy to stimulate change towards food resilience through relevant policy recommendations.",
              },
            ].map((item) => (
              <Grid item size={{ md: 4.5 }}>
                <Box display="flex" gap="30px" alignItems="center">
                  <Box
                    bgcolor="lightgray"
                    height="70px"
                    minWidth="70px"
                    maxWidth="70px"
                    display="block"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontSize="18px"
                      color="primary"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography>{item.body}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default _about_us_content_3;
