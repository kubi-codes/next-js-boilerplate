import { Box, Container, Typography } from "@mui/material";
import React from "react";

function _headmaster() {
  return (
    <Box position="relative">
      <Box
        minHeight="90vh"
        bgcolor="lightgray"
        display="flex"
        alignItems="center"
        sx={{
          backgroundImage: `url('/images/bg-food-security.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></Box>

      <Box
        sx={{
          zIndex: 2,
          width: "80vw",
          height: "10vh",
          position: "absolute",
          bottom: "15vh",
        }}
      >
        <Box position="relative">
          <Container sx={{ zIndex: 2 }}>
            <Typography
              variant="h5"
              component="h1"
              color="primary"
              gutterBottom
            >
              Sustainable Peatland <br />
              Agriculture
            </Typography>

            <Typography>
              Uncover innovative solutions for sustainable farming on peatlands
              through TJF's groundbreaking research.
            </Typography>
          </Container>
          <Box
            bgcolor="#fff"
            width="80vw"
            height="175px"
            position="absolute"
            top="-10px"
            zIndex={-1}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default _headmaster;
