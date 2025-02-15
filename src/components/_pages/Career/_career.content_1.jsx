import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function _career_content_1() {
  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid size={{ md: 5 }} height="100vh" display="flex" alignItems="center">
          <Box>
            <Typography variant="body1" fontSize="36px" gutterBottom>
              Careers at
            </Typography>

            <Typography variant="h1" color="primary" sx={{ mb: 4 }}>
              Tay Juhana Foundation
            </Typography>

            <Typography sx={{ mb: 2 }}>
              If you value action, teamwork, and are always looking for ways to
              innovate, Tay Juhana Foundation is the place for you! See below
              for current career opportunities and learn more about what you
              could be part of if you join Tay Juhana Foundation.
            </Typography>

            <Button variant="contained" color="success">
              See Open Position
            </Button>
          </Box>
        </Grid>
        <Grid size={{ md: 6 }} position="relative">
          <Box
            sx={{
              backgroundImage: `url('/images/bg-career.png')`,
              height: "100vh",
              position: "absolute",
              width: "50vw",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default _career_content_1;
