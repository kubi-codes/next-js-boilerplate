import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_about_us.content_2";

function _about_us_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container sx={{ mb: "200px", mt: '100px' }}>
          <Grid container justifyContent="center">
            <Grid item size={{ md: 6 }}>
              <Typography
                variant="h3"
                color="primary"
                align="center"
                gutterBottom
                sx={{ mb: 5 }}
              >
                OUR VISION
              </Typography>
              <Typography align="center">
                An ensured food security for humanity and the achievement of
                relevant Sustainable Development Goals through 
                <b>environmentally, socially, and economically</b> sustainable
                agriculture system of suboptimal wetland, lowland, and flatland.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _about_us_content_2;
