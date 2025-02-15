import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function _home_content_4() {
  return (
    <Box minHeight="500px" position="relative">
      <Container>
        <Grid container justifyContent="space-between">
          <Grid
            item
            size={{ md: 5 }}
            position="relative"
            display="flex"
            alignItems="center"
            height="400px"
          >
            <Box
              sx={{ backgroundImage: `url('/images/bg-grid.png')` }}
              height="300px"
              width="50vw"
              position="absolute"
              zIndex={0}
              top={0}
              left={0}
            />
            <Box zIndex={1} pt="50px">
              <Box
                bgcolor={(props) => props.palette.warning.main}
                display="inline-block"
                padding={1}
                paddingX={2}
                mb={1}
              >
                <Typography color="#fff">
                  Food Security ans Sustainability Center
                </Typography>
              </Box>
              <Typography variant="h4" color="primary" gutterBottom>
                The Future of
                <br />
                Suboptimal Land <br />
                Agriculture
              </Typography>
              <Typography sx={{ mb: 4 }}>
                From peatland to our plate Uncover innovative solutions for
                sustainable farming on peatlands through TJF's groundbreaking
                research. Sustainable Peatland Agriculture Discover how we're
                transforming 20 hectares of suboptimal land into a thriving
                integrated farm.
              </Typography>
              <Button variant="contained" color="success">
                Read Full Story
              </Button>
            </Box>
          </Grid>
          <Grid item size={{ md: 5 }}>
            <Box
              sx={{
                height: "500px",
                backgroundColor: "lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",

                backgroundImage: `url('/images/bg-example.jpg')`,
                backgroundSize: "cover",
                width: "50vw",
                right: -8,
              }}
              zIndex={1}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _home_content_4;
