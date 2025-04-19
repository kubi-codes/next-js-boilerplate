import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_food_security_sustainability_center.headmaster";

function _initiatives_headmaster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box position="relative" mb="100px" display={isMobile ? "none" : "block"}>
        <Box
          minHeight="60vh"
          bgcolor="lightgray"
          display="flex"
          alignItems="center"
          sx={{
            backgroundImage: `url('/images/image-5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        <Box
          sx={{
            zIndex: 2,
            width: "100vw",
            height: "15vw",
            position: "absolute",
            mt: "-120px",
          }}
        >
          <Box position="relative">
            <Container sx={{ zIndex: 2 }}>
              <Typography
                variant="h3"
                component="h1"
                color="primary"
                sx={{ mb: "40px" }}
              >
                Food Security and
                <br /> Sustainability Center
              </Typography>

              <Box maxWidth="50vw">
                <Typography>
                  From peatland to our plate Uncover innovative solutions for
                  sustainable farming on peatlands through TJF's groundbreaking
                  research. Sustainable Peatland Agriculture Discover how we're
                  transforming 20 hectares  of suboptimal land into a thriving
                  integrated farm. From peatland to our plate Uncover innovative
                  solutions for sustainable farming on peatlands through TJF's
                  groundbreaking research. Sustainable Peatland Agriculture
                  Discover how we're transforming 20 hectares  of suboptimal
                  land into a thriving integrated farm.
                </Typography>
              </Box>
            </Container>
            <Box
              bgcolor="#fff"
              width="45vw"
              height="220px"
              position="absolute"
              top="-10px"
              zIndex={-1}
            ></Box>
          </Box>
        </Box>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _initiatives_headmaster;
