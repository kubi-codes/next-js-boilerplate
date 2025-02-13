import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";

function _home_content_2() {
  return (
    <Box minHeight="90vh" display="flex" alignItems="center">
      <Container>
        <Grid container justifyContent='space-between'>
          <Grid item size={{ md: 3.5 }}>
            <Box
              bgcolor={(props) => props.palette.warning.main}
              display="inline-block"
              padding={1}
              paddingX={2}
              mb={1}
            >
              <Typography color="#fff">
                Suboptimal Land Agriculture Initiatives
              </Typography>
            </Box>
            <Typography variant="h4" color="primary" gutterBottom>
              Behind the Story:
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
              The Journey to Successful Suboptimal Land Farming
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Discover how Indonesian farmers are transforming suboptimal land
              into thriving farms and ensuring food security for their
              community.
            </Typography>
            <Button variant="contained" color="success">
              Read Full Story
            </Button>
          </Grid>
          <Grid item size={{ md: 7 }}>
            <Box sx={{ bgcolor: "lightgray", height: "400px" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _home_content_2;
