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
    <Box minHeight="90vh" paddingTop="15vh" position="relative">
      <Container>
        <Box mb={3}>
          <Typography variant="h1" color="primary" gutterBottom>
            OUR FUTURE FOOD
          </Typography>
          <Box
            sx={{
              backgroundColor: (props) => props.palette.warning.main,
            }}
            display="inline-block"
            px={2}
            pb={1}
            pt={2}
            mb={3}
          >
            <Typography variant="h1" color="#fff" y>
              BEGINS HERE
            </Typography>
          </Box>

          <Box width="80%" mb={3}>
            <Typography>
              The future of food begins here, on lands often overlooked:
              suboptimal land. Let's unlock their potential and build a
              sustainable future together.
            </Typography>
          </Box>

          <Button variant="contained" color="success">
            READ OUR STORY
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url('/images/bg-homepage.jpg')`,
          height: "400px",
          width: "100vw",
        }}
      />

      <Container>
        <Grid
          container
          justifyContent="space-between"
          mt={4}
          mb={4}
          width="95%"
        >
          <Grid item size={{ xs: 5.5 }}>
            <Box component="hr" />
            <Typography color="secondary" sx={{ my: 1 }}>
              Resources
            </Typography>
            <Typography variant="h6" lineHeight="22px">
              Coconut-based Agroforestry Paludiculture to Improve Peatlands
              Sustainability and Food Security
            </Typography>
          </Grid>
          <Grid item size={{ xs: 5.5 }}>
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
      </Container>
    </Box>
  );
}

export default _home_headmaster;
