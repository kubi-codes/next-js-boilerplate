import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";

function _career_content_1() {
  return (
    <Box mt="30px">
      <Container>
        <Box
          sx={{
            backgroundImage: `url('/images/bg-career.png')`,
            height: "350px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right",
          }}
        />

        <Box mt="10px">
          <Typography variant="body1" fontSize="24px" gutterBottom>
            Careers at
          </Typography>

          <Typography variant="h1" color="primary" sx={{ mb: "20px" }}>
            Tay Juhana Foundation
          </Typography>

          <Typography sx={{ mb: 2 }}>
            If you value action, teamwork, and are always looking for ways to
            innovate, Tay Juhana Foundation is the place for you! See below for
            current career opportunities and learn more about what you could be
            part of if you join Tay Juhana Foundation.
          </Typography>

          <Button variant="contained" color="success">
            See Open Position
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _career_content_1;
