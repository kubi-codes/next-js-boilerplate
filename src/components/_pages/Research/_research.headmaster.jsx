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
            RESEARCH
          </Typography>
          <Typography color="#fff">
            The Tay Juhana Foundation work is producing high-quality research,
            including reports, issue briefs, working papers, guidebooks and
            more. Our publications are subject to peer review and held to
            academic standards of excellence for objectivity, rigor and quality.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default _initiatives_headmaster;
