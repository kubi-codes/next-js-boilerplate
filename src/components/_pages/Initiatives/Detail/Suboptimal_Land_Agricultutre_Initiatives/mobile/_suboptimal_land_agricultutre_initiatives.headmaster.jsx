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
          minHeight: "15vh",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      >
        <Box position="relative">
          <Container sx={{ zIndex: 2 }}>
            <Typography
              variant="h5"
              component="h1"
              color="primary"
              align="right"
              gutterBottom
            >
              Suboptimal Land Agricultutre Initiatives
            </Typography>

            <Typography align="right">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Container>
          <Box
            bgcolor="#fff"
            width="80vw"
            height="180px"
            position="absolute"
            bottom="0px"
            zIndex={-1}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default _headmaster;
