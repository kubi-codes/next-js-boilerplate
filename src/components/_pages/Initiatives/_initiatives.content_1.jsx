import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_initiatives.content_1";

function _initiatives_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container>
          <Box width="60%" margin="auto" py="7%">
            <Typography variant="h5" align="center">
              We partner with governments, businesses, civil society groups and
              others to change the way the world produces and uses food and
              energy and designs its cities. Our 100+ projects span from
              advising mayors on how to reduce traffic fatalities to working
              with restaurant chains to cut food waste to powering rural
              healthcare facilities with clean energy. We mobilize global and
              regional initiatives that spur international climate action,
              advance sustainable ocean management, halt tropical deforestation,
              restore degraded landscapes and more.
            </Typography>
          </Box>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _initiatives_content_1;
