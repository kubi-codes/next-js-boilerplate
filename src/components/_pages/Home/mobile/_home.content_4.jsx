import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function _home_content_4() {
  return (
    <Box minHeight="500px" position="relative">
      <Box
        sx={{
          height: "200px",
          backgroundSize: "cover",
          backgroundImage: `url('/images/bg-example.jpg')`,

          width: "100vw",
        }}
        zIndex={1}
      ></Box>

      <Container sx={{ py: "20px" }}>
        <Box>
          <Box display="flex" justifyContent="flex-end">
            <Box
              bgcolor={(props) => props.palette.warning.main}
              display="inline-block"
              pb={1}
              pt={1.2}
              paddingX={1.2}
              mb={1}
            >
              <Typography color="#fff">
                Food Security ans Sustainability Center
              </Typography>
            </Box>
          </Box>
          <Typography variant="h5" color="primary" align="right" gutterBottom>
            The Future of
            <br />
            Suboptimal Land <br />
            Agriculture
          </Typography>
          <Typography align="right" sx={{ mb: 2 }}>
            From peatland to our plate Uncover innovative solutions for
            sustainable farming on peatlands through TJF's groundbreaking
            research. Sustainable Peatland Agriculture Discover how we're
            transforming 20 hectares of suboptimal land into a thriving
            integrated farm.
          </Typography>

          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="success">
              READ FULL STORY
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_4;
