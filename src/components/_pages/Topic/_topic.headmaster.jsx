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
            TOPIC
          </Typography>
          <Typography color="#fff">
            Tay Juhana Foundation (TJF) is a nonprofit organization dedicated to
            advocate the conversion and cultivation of suboptimal lands into
            productive lands, through the most environmentally, economically,
            and socially sustainable manner. In accordance with our vision,
            mission, and values, we commit to delve into these relevant topics
            of interest to support the causes that we believe.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default _initiatives_headmaster;
