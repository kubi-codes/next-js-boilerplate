import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_initiatives.headmaster";

function _initiatives_headmaster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box position="relative" display={isMobile ? "none" : "block"}>
        <Box
          minHeight="80vh"
          bgcolor="lightgray"
          display="flex"
          alignItems="center"
          sx={{
            backgroundImage: `url('/images/bg-topic.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container sx={{ zIndex: 2 }}>
            <Box maxWidth="70%">
              <Typography variant="h1" color="#fff" gutterBottom>
                INITIATIVES
              </Typography>
              <Typography color="#fff">
                Tay Juhana Foundation has more than 150 active projects,
                coalitions and initiatives. We work closely with partners
                globally and in focus countries to create a better world for
                people, nature and the climate.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            height: "80vh",
            width: "100vw",
            backgroundColor: "#00000066",
            position: "absolute",
            top: 0,
          }}
        />
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _initiatives_headmaster;
