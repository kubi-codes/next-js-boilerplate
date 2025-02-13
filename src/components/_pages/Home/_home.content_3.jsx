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
    <Box minHeight="450px">
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item size={{ md: 7 }}>
            <Box
              bgcolor="lightgray"
              height="450px"
              width="100%"
            ></Box>
          </Grid>
          <Grid item size={{ md: 4 }} position="relative">
            <Box
              bgcolor={(props) => props.palette.warning.main}
              display="inline-block"
              padding={1}
              paddingX={2}
              mb={1}
            >
              <Typography color="#fff">
                Sustainable Peatland Agriculture
              </Typography>
            </Box>
            <Typography variant="h4" color="primary" gutterBottom>
              From Peatland to Our Plate
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Uncover innovative solutions for sustainable farming on peatlands
              through TJF's groundbreaking research.
            </Typography>
            <Button variant="contained" color="success">
              Read Full Story
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _home_content_3;
