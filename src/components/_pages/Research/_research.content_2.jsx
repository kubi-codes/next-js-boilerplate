import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import React from "react";

function _research_content_2() {
  return (
    <Box pb="80px">
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item size={{ md: 2 }}>
            <Box bgcolor="#000" height="6px" mb="8px" />

            <Typography variant="h4" color="primary">
              RECENT PUBLICATION
            </Typography>
          </Grid>
          <Grid item size={{ md: 9 }}>
            <Box bgcolor="#000" height="1px" mb="40px" />

            <Grid container justifyContent="space-between">
              {React.Children.toArray(
                [...new Array(6)].map(() => (
                  <Grid item size={{ md: 3.8 }} sx={{ mb: "40px" }}>
                    <CardActionArea>
                      <Box
                        bgcolor={(props) => props.palette.warning.main}
                        display="inline-flex"
                        px={2}
                        py={0.3}
                        mb={1.5}
                      >
                        <Typography color="#fff">Peatland</Typography>
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        Integrated water management practice in tropical
                        peatland agriculture has low carbon emissions and
                        subsidence rates
                      </Typography>
                      <Typography color="secondary">
                        17 February 2024
                      </Typography>
                    </CardActionArea>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>

        <Box display="flex" alignItems="center" gap="40px">
          <Box bgcolor="#000" height="1px"  width="90%" />

          <Button variant="contained" color="success" sx={{ width: "150px" }}>
            View More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _research_content_2;
