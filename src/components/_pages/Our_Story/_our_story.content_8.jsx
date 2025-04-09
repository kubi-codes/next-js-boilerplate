import React from "react";
import { Box, Container, Typography } from "@mui/material";

function _our_story_content_8() {
  return (
    <Box
      data-scroll-section
      position="relative"
      width="100vw"
      height="100vh"
      sx={{ ml: "-5vw" }}
    >
      <Box
        sx={{
          backgroundColor: "#0000005e",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      />

      <Box position="absolute" height="100vw" width="100vw" zIndex={2}>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-end"
          height="100vh"
          px="100px"
          py="50px"
        >
          <Typography variant="h1" color="#fff" textAlign="end">
            We have a different idea: <br />
            To work with lands that are often forgotten, <br />
            those people deemed as unproductive
          </Typography>
        </Box>
      </Box>

      <Container>

        
        <Box
          position="absolute"
          width="100vw"
          top="50vh"
          zIndex={2}
        >
          <Box display="flex" gap="20px" mb="50px">
            <Box borderLeft="2px solid #fff" height="0px"></Box>
            <Typography color="#fff" fontSize="24px" lineHeight="34px">
              In addressing the challenge for food security,
              <br /> we need to highlight not to
              <br /> give burden to the environment.
            </Typography>
          </Box>

          <Box display="flex" gap="20px">
            <Box borderLeft="2px solid #fff" height="0px"></Box>
            <Typography color="#fff" fontSize="24px" lineHeight="28px">
              We have to think long-term about how our future
              <br /> generation can live. The most common choices to
              <br /> increase food production are intensification and
              <br />
              extensification.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage: `url('/images/our-story/Rectangle 130.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          flexShrink: 0, // Agar tidak mengecil saat scroll
        }}
      />
    </Box>
  );
}

export default _our_story_content_8;
