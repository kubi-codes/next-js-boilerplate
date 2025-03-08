import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

function _about_us_content_5() {
  return (
    <Box
      mb="50px"
      py="20px"
      sx={{
        backgroundImage: "url('/images/bg-grid.png')",
        zIndex: -2,
      }}
    >
      <Container sx={{ mb: "10px" }}>
        <Typography
          variant="h1"
          component="h3"
          lineHeight="70px"
          fontSize="32px"
          color="primary"
        >
          READ OUR STORY ABOUT FOOD FIGHTERS!
        </Typography>
      </Container>

      <Box bgcolor={(props) => props.palette.warning.main} padding="5px">
        <Button
          sx={{ fontSize: "16px", color: "#fff", justifyContent: 'flex-end', display: 'flex' }}
          endIcon={
            <img
              src="/icons/circle-arrow-right-white.svg"
              alt="icons"
              width="20px"
            />
          }
          fullWidth
        >
          Read Here
        </Button>
      </Box>
    </Box>
  );
}

export default _about_us_content_5;
