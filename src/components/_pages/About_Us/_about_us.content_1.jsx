import { Container, Grid2 as Grid, Box } from "@mui/material";
import React from "react";

function _about_us_content_1() {
  return (
    <Box
      mb="150px"
      sx={{
        backgroundImage: "url('/images/bg-grid.png')",
        paddingBottom: "50px",
        zIndex: -2,
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item size={{ md: 9 }}>
            <Box position="relative">
              <Box
                component="img"
                src="/icons/play-error.svg"
                position="absolute"
                top="50%"
                left="50%"
                sx={{ transform: "translate(-50%, -50%)", cursor: "pointer" }}
                zIndex={2}
              />
              <Box
                height="580px"
                bgcolor={(props) => props.palette.warning.main}
              ></Box>

              <Box
                height="580px"
                width="100%"
                bgcolor="lightgray"
                position="absolute"
                bottom={20}
                right={20}
                // zIndex={-1}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _about_us_content_1;
