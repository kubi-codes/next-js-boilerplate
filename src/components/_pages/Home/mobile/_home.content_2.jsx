import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function _home_content_2() {
  return (
    <Box py="35px">
      <Container>
        <Box>
          <Box
            bgcolor={(props) => props.palette.warning.main}
            display="inline-block"
            pb={1}
            pt={1.2}
            paddingX={1.2}
            mb={1}
          >
            <Typography color="#fff">
              Suboptimal Land Agriculture Initiatives
            </Typography>
          </Box>
          <Typography variant="h5" color="primary" sx={{ mb: 0.5 }}>
            Behind the Story:
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            The Journey to Successful
            <br /> Suboptimal Land Farming
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Discover how Indonesian farmers are transforming suboptimal land
            into thriving farms and ensuring food security for their community.
          </Typography>
          <Button variant="contained" color="success">
            Read Full Story
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_2;
