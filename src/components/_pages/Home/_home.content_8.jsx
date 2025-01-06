import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

function _home_content_8() {
  return (
    <Box height="45vh" bgcolor="lightgray" display="flex" alignItems="center">
      <Container>
        <Typography variant="h2" color="#fff" align="center">
          BE PART OF THE FOOD FIGHTERS!
        </Typography>
        <Typography align="center" color="#fff" sx={{ mt: 3, mb: 4 }}>
          Sign up for more up-to-date videos and publications related to food
          security issue.
        </Typography>

        <Box display="flex" gap="15px" justifyContent="center">
          <TextField
            placeholder="Input your email here"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              width: "400px",
            }}
          />
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_8;
