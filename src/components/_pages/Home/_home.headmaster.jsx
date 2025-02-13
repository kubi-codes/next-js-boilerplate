import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

function _home_headmaster() {
  return (
    <Box minHeight="90vh" paddingTop="8vh" position="relative">
      <Container>
        <Grid container>
          <Grid
            item
            size={{ md: 6 }}
            display="flex"
            alignItems="center"
            sx={{ minHeight: "95vh" }}
          >
            <Box>
              <Typography variant="h1" color="primary" gutterBottom>
                OUR FUTURE FOOD
              </Typography>
              <Box
                sx={{ backgroundColor: (props) => props.palette.warning.main }}
                display="inline-block"
                p={1}
                mb={3}
              >
                <Typography variant="h1" color="#fff" y>
                  BEGINS HERE
                </Typography>
              </Box>

              <Box width="80%" mb={4}>
                <Typography>
                  The future of food begins here, on lands often overlooked:
                  suboptimal land. Let's unlock their potential and build a
                  sustainable future together.
                </Typography>
              </Box>

              <Button variant="contained" color="success">
                READ OUR STORY
              </Button>

              <Grid container justifyContent="space-between" mt={8} width="95%">
                <Grid item size={{ md: 5.5 }}>
                  <Box component="hr" />
                  <Typography color="secondary" sx={{ my: 1 }}>
                    Resources
                  </Typography>
                  <Typography variant="h6" lineHeight="22px">
                    Coconut-based Agroforestry Paludiculture to Improve
                    Peatlands Sustainability and Food Security
                  </Typography>
                </Grid>
                <Grid item size={{ md: 5.5 }}>
                  <Box component="hr" />
                  <Typography color="secondary" sx={{ my: 1 }}>
                    Resources
                  </Typography>
                  <Typography variant="h6" lineHeight="22px">
                    Integrated water management practice in tropical peatland
                    agriculture has low carbon emissions and subsidence rates
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item size={{ md: 6 }}>
            <Box
              sx={{
                backgroundColor: "lightgray",
                height: "103vh",
                position: "absolute",
                width: "50vw",
                marginTop: "-8vh",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _home_headmaster;
