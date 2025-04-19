import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _about_us_content_3() {
  return (
    <Box mb="80px">
      <Container>
        <Typography
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          OUR MISSION
        </Typography>
        <Typography align="center" sx={{ mb: "50px" }}>
          In order to achieve our vision,
          <br /> we are committed to:
        </Typography>

        <Grid container justifyContent="space-around" rowGap={3}>
          {React.Children.toArray(
            [
              {
                img: "/images/our-mission/Group 81.png",
                title: "Conducting Research",
                body: "Catalyze research and development to advance sustainable agricultural innovation on suboptimal wetland, lowland, and flatland.",
              },
              {
                img: "/images/our-mission/Group 83.png",
                title: "Consulting",
                body: "Provide consultancy for independent and collaborative works on sustainable agriculture practice of suboptimal wetland, lowland, and flatland.",
              },
              {
                img: "/images/our-mission/Group 89.png",
                title: "Educating",
                body: "Educate all the relevant stakeholders on effective water management system in wetland agriculture.",
              },
              {
                img: "/images/our-mission/Group 87.png",
                title: "Advocating",
                body: "Facilitate the advocacy to stimulate change towards food resilience through relevant policy recommendations.",
              },
            ].map((item) => (
              <Grid item size={{ md: 4.5 }}>
                <Box display="flex" gap="30px" alignItems="center">
                  <Box
                    height="70px"
                    minWidth="70px"
                    maxWidth="70px"
                    display="block"
                    sx={{
                      backgroundImage: `url('${item.img}')`,
                      backgroundSize: "contain",
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      fontSize="16px"
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
