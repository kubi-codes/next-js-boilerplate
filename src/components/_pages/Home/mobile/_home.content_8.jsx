import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

function _home_content_8() {
  return (
    <Box
      minHeight="350px"
      bgcolor="lightgray"
      display="flex"
      alignItems="center"
      sx={{
        backgroundImage: `url('/images/bg-cta.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Typography variant="h2" color="#fff" align="center">
          BE PART OF
          <br /> THE FOOD FIGHTERS!
        </Typography>
        <Typography align="center" color="#fff" sx={{ mt: 3, mb: 4 }}>
          Sign up for more up-to-date videos and publications related to food
          security issue.
        </Typography>

        <TextField
          placeholder="Input your email here"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
          fullWidth
        />

        <Box display="flex" justifyContent="center" mt="20px">
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_8;
