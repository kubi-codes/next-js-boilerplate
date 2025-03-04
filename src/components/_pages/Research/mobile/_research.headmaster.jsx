import { Box, Container, Typography } from "@mui/material";
import React from "react";

function _research_headmaster() {
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
        <Container sx={{ zIndex: 2 }}>
          <Typography variant="h1" color="#fff" gutterBottom>
            RESEARCH
          </Typography>
          <Typography color="#fff">
            The Tay Juhana Foundation work is producing high-quality research,
            including reports, issue briefs, working papers, guidebooks and
            more. Our publications are subject to peer review and held to
            academic standards of excellence for objectivity, rigor and quality.
          </Typography>
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

export default _research_headmaster;
