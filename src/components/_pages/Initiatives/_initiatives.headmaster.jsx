import { Box, Container, Typography } from "@mui/material";
import React from "react";

function _initiatives_headmaster() {
  return (
    <Box
      minHeight="80vh"
      bgcolor="lightgray"
      display="flex"
      alignItems="center"
    >
      <Container>
        <Box maxWidth="70%">
          <Typography variant="h1" color="#fff" gutterBottom>
            INITIATIVES
          </Typography>
          <Typography color="#fff">
            Tay Juhana Foundation has more than 150 active projects, coalitions
            and initiatives. We work closely with partners globally and in focus
            countries to create a better world for people, nature and the
            climate.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default _initiatives_headmaster;
