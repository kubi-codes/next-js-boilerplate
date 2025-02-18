import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_3";

function _home_content_3() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        minHeight="500px"
        position="relative"
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Grid container justifyContent="space-between">
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
                  left: -8,
                }}
                zIndex={1}
              ></Box>
            </Grid>
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
                bottom="-100px"
                right={0}
              />
              <Box zIndex={1}>
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
                <Typography variant="h4" color="primary" gutterBottom>
                  From Peatland to Our Plate
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Uncover innovative solutions for sustainable farming on
                  peatlands through TJF's groundbreaking research.
                </Typography>
                <Button variant="contained" color="success">
                  Read Full Story
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_3;
