import React from "react";
import { Box, Container, Typography, Hid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function _home_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));


  return (
    <>
      <Box
        bgcolor={(props) => props.palette.primary.main}
        paddingY="40px"
      >
        <Container>
          {/* <Typography
            color="#fff"
            align="center"
            fontSize="22px"
            lineHeight="36px"
          >
            “Tay Juhana Foundation (TJF) is a nonprofit organization dedicated
            to advocate the conversion and cultivation of suboptimal lands into
            productive lands, through the most environmentally, economically,
            and socially sustainable manner. In accordance with our vision,
            mission, and values, we commit to delve into these relevant topics
            of interest to support the causes that we believe.”
          </Typography> */}
        </Container>
      </Box>
    </>
  );
}

export default _home_content_1;
