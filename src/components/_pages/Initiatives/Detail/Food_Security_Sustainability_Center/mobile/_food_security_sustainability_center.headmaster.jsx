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
          backgroundImage: `url('/images/image-5.jpg')`,
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
          bottom: "8vh",
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
              Food Security and Sustainability Center
            </Typography>

            <Typography>
              From peatland to our plate Uncover innovative solutions for
              sustainable farming on peatlands through TJF's groundbreaking
              research. Sustainable Peatland Agriculture Discover how we're
              transforming 20 hectares of suboptimal land into a thriving
              integrated farm. From peatland to our plate Uncover innovative
              solutions for sustainable farming on peatlands through TJF's
              groundbreaking research. Sustainable Peatland Agriculture Discover
              how we're transforming 20 hectares  of suboptimal land into a
              thriving integrated farm.
            </Typography>
          </Container>
          <Box
            bgcolor="#fff"
            width="80vw"
            height="150px"
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
