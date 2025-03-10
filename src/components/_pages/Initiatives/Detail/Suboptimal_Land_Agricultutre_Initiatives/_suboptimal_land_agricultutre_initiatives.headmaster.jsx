import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_suboptimal_land_agricultutre_initiatives.headmaster";

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
            backgroundImage: `url('/images/bg-food-security.jpg')`,
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
                align="right"
              >
                Suboptimal Land
                <br /> Agricultutre Initiatives
              </Typography>

              <Typography align="right">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </Typography>
            </Container>
            <Box
              bgcolor="#fff"
              width="45vw"
              height="220px"
              position="absolute"
              top="-10px"
              right="0px"
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
