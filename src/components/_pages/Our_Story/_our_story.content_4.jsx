import React from "react";
import { Box, Typography } from "@mui/material";

function _our_story_content_1() {
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
        <Box display="flex" alignItems="flex-end" height="100vh" px="100px" py="50px">
          <Box
            component="img"
            src="/images/our-story/image-2.png"
            alt="comma"
            sx={{ mb: "300px", mr: "10px" }}
          />

          <Typography variant="h1" color="#fff">
            We face the challenges to produce <br /> food and to ensure enough
            and
            <br />
            stable access to utilize the food
            <br /> for everyone.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url('/images/our-story/image.jpg')`,
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

export default _our_story_content_1;
