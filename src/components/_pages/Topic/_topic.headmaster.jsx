import { Box, Container, Typography } from "@mui/material";
import React from "react";

function _topic_headmaster() {
  return (
    <Box position="relative">
      <Box
        minHeight="80vh"
        bgcolor="lightgray"
        display="flex"
        alignItems="center"
        sx={{
          backgroundImage: `url('/images/bg-topic.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container sx={{ zIndex: 2}}>
          <Box maxWidth="70%">
            <Typography variant="h1" color="#fff" gutterBottom>
              TOPIC
            </Typography>
            <Typography color="#fff">
              Tay Juhana Foundation (TJF) is a nonprofit organization dedicated
              to advocate the conversion and cultivation of suboptimal lands
              into productive lands, through the most environmentally,
              economically, and socially sustainable manner. In accordance with
              our vision, mission, and values, we commit to delve into these
              relevant topics of interest to support the causes that we believe.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          height: "80vh",
          width: "100vw",
          backgroundColor: "#00000066",
          position: "absolute",
          top: 0,
        }}
      />
    </Box>
  );
}

export default _topic_headmaster;
