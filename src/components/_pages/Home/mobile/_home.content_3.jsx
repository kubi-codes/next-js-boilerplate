import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function _home_content_3() {
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
        <Box
          bgcolor={(props) => props.palette.warning.main}
          display="inline-block"
          pb={1}
          pt={1.2}
          paddingX={1.2}
          mb={1}
        >
          <Typography color="#fff">Sustainable Peatland Agriculture</Typography>
        </Box>
        <Typography variant="h5" color="primary" gutterBottom>
          From Peatland
          <br /> to Our Plate
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Uncover innovative solutions for sustainable farming on peatlands
          through TJF's groundbreaking research.
        </Typography>
        <Button variant="contained" color="success">
          READ FULL STORY
        </Button>
      </Container>
    </Box>
  );
}

export default _home_content_3;
