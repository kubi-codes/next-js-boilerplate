import React from "react";
import { Box, Typography } from "@mui/material";

function _our_story_content_14() {
  return (
    <Box data-scroll-section position="relative" width="100vw" height="100vh">
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
          alignItems="flex-end"
          justifyContent="flex-end"
          height="100vh"
          px="200px"
          py="150px"
        >
          <Box
            component="img"
            src="/images/our-story/image-2.png"
            alt="comma"
            sx={{ mb: "250px", mr: "-50px" }}
          />

          <Box>
            <Typography variant="h1" color="#fff" align="right">
              Always contribute to society <br /> If you cannot contribute to
              society,
              <br /> do not be a burden to society
            </Typography>

            <Box display="flex" justifyContent="flex-end" flexDirection="column" alignItems="flex-end" mt="50px">
              <Typography variant="h5" color="#fff" zIndex={1}>
                Tay Juhana (1938-2016)
              </Typography>
              <Box
                sx={{
                  borderBottom: "20px solid #ECB31D",
                  width: "280px",
                  ml: "-10px",
                  mt: "-17px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url('/images/our-story/image-5.jpg')`,
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

export default _our_story_content_14;
