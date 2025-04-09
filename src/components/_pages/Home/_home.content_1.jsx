import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

function _home_content_1() {
  const theme = useTheme();
  
  return (
    <Box
      bgcolor={(props) => props.palette.primary.main}
      paddingY="40px"
      mb="20px"
    >
      <Container maxWidth="lg">
        <Typography
          color="#fff"
          align="center"
          fontSize={{
            xs: "16px",
            sm: "18px",
            md: "20px",
            lg: "22px",
          }}
          lineHeight={{
            xs: "26px",
            sm: "30px",
            md: "34px",
            lg: "36px",
          }}
          fontFamily={theme.typography.body1.fontFamily}
        >
          “Tay Juhana Foundation (TJF) is a nonprofit organization dedicated to
          advocate the conversion and cultivation of suboptimal lands into
          productive lands, through the most environmentally, economically, and
          socially sustainable manner. In accordance with our vision, mission,
          and values, we commit to delve into these relevant topics of interest
          to support the causes that we believe.”
        </Typography>
      </Container>
    </Box>
  );
}

export default _home_content_1;
