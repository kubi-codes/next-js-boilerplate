import React from "react";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

function _our_story_content_2() {
  return (
    <Box
      data-scroll-section
      position="relative"
      width="100vw"
      height="100vh"
      bgcolor={(props) => props.palette.primary.main}
      display="flex"
      alignItems="center"
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ md: 4 }}>
            <Typography
              color="#fff"
              fontSize="36px"
              lineHeight="46px"
              sx={{ mb: "40px" }}
            >
              While some people go to bed with empty stomachs in their nights,
              there are also people with overweight and obesity.
            </Typography>

            <Typography
              color="#ECB31D"
              fontWeight="bold"
              fontSize="36px"
              lineHeight="46px"
            >
              Over 2 billion people do not have regular access to food with 704
              million live in hunger.
            </Typography>
          </Grid>
          <Grid size={{ md: 6.5 }} offset={1}>
            <Box
              component="img"
              src="/images/our-story/world-food 1.png"
              height="750px"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _our_story_content_2;
