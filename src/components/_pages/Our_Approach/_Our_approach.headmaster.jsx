import { Box, Container, Typography } from "@mui/material";
import React from "react";

function _initiatives_headmaster() {
  return (
    <>
      <Box position="relative" mb="100px">
        <Box
          minHeight="60vh"
          bgcolor="lightgray"
          display="flex"
          alignItems="center"
          sx={{
            backgroundImage: `url('/images/bg-food-security.jpg')`,
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
          <Box position="relative">
            <Container sx={{ zIndex: 2 }}>
              <Typography
                variant="h3"
                component="h1"
                color="primary"
                sx={{ mb: "40px" }}
              >
                Sustainable Peatland <br />
                Agriculture
              </Typography>

              <Typography>
                Uncover innovative solutions for sustainable farming on <br />
                peatlands through TJF's groundbreaking research.
              </Typography>
            </Container>
            <Box
              bgcolor="#fff"
              width="45vw"
              height="220px"
              position="absolute"
              top="-10px"
              zIndex={-1}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default _initiatives_headmaster;
