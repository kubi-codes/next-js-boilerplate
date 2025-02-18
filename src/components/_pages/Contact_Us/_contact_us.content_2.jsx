import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function _contact_us_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box mt="50px">
      <Container>
        <Typography
          variant="h3"
          align="center"
          color="primary"
          sx={{ mb: isMobile ? 2 : 5 }}
        >
          OUR HEADQUARTER
        </Typography>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0424000724356!2d106.84883007532125!3d-6.1249965938617175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1df72ce41c01%3A0xbbb5f2a0c5cf284f!2sTay%20Juhana%20Foundation!5e0!3m2!1sid!2sid!4v1739502653546!5m2!1sid!2sid"
          width="100%"
          height={isMobile ? "350" :"600"}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Box>
  );
}

export default _contact_us_content_2;
