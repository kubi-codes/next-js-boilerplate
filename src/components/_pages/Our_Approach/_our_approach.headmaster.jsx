import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function _initiatives_headmaster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box position="relative" mb="100px" display={isMobile ? "none" : "block"}>
        <Box
          minHeight="60vh"
          bgcolor="lightgray"
          display="flex"
          alignItems="center"
          sx={{
            backgroundImage: `url('/images/bg-our-approach.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        <Box
          sx={{
            zIndex: 2,
            width: "100vw",
            height: "15vw",
            position: "absolute",
            mt: "-120px",
          }}
        >
          <Box position="relative" pt="50px">
            <Container sx={{ zIndex: 2 }}>
              <Typography variant="h1" color="primary">
                HOW TO ACHIEVE
                <br /> OUR VISION
              </Typography>

              <Grid container justifyContent="flex-end">
                <Grid size={{ md: 6 }}>
                  <Typography align="right" mt="-50px">
                    Our strategy is to combine the experience that we have in
                    comprehensive water management system that supports a
                    sustainable agricultural practice, with cutting-edge
                    scientific studies and strategic partnerships. Through the
                    sound scientific knowledge, we aim to make our organization
                    a well-trusted source of information, and through strategic
                    collaboration with relevant partners, we see the opportunity
                    to leverage significant change.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Box
              bgcolor="#fff"
              width="45vw"
              height="220px"
              position="absolute"
              top="-10px"
              left="0px"
              zIndex={-1}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default _initiatives_headmaster;
