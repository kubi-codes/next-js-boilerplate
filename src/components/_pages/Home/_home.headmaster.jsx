import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.headmaster";
import Link from "next/link";

function _home_headmaster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        minHeight="90vh"
        paddingTop="8vh"
        position="relative"
        display={isMobile ? "none" : "block"}
      >
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
                  sx={{
                    backgroundColor: (props) => props.palette.warning.main,
                  }}
                  display="inline-block"
                  pt={1.2}
                  px={1}
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

                <Link href={`/our-story`}>
                  <Button variant="contained" color="success">
                    READ OUR STORY
                  </Button>
                </Link>

                <Grid
                  container
                  justifyContent="space-between"
                  mt={8}
                  width="95%"
                >
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
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: `url('/images/bg-homepage.jpg')`,
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

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_headmaster;
