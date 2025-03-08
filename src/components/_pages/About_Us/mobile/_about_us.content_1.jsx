import { Container, Grid2 as Grid, Box, IconButton } from "@mui/material";
import React from "react";

function _about_us_content_1() {
  return (
    <Box
      mb="50px"
      mt="50px"
      sx={{
        backgroundImage: "url('/images/bg-grid.png')",
        paddingBottom: "20px",
        zIndex: -2,
      }}
    >
      <Container>
        <Box position="relative">
          <Box
            component="img"
            src="/icons/play-error.svg"
            position="absolute"
            top="45%"
            left="50%"
            width="40px"
            sx={{ transform: "translate(-50%, -50%)", cursor: "pointer" }}
            zIndex={2}
          />
          <Box
            height="200px"
            bgcolor={(props) => props.palette.warning.main}
          ></Box>

          <Box
            height="200px"
            width="100%"
            bgcolor="lightgray"
            position="absolute"
            bottom={10}
            right={10}
            // zIndex={-1}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default _about_us_content_1;
