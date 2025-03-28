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

function _about_us_content_5() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        mb={isMobile ? "50px" : "150px"}
        py="50px"
        display={isMobile ? "none" : "block"}
        sx={{
          backgroundImage: "url('/images/bg-grid.png')",
          zIndex: -2,
        }}
      >
        <Container>
          <Grid justifyContent="space-between" alignItems="center" container>
            <Grid size={{ md: 7 }}>
              <Typography variant="h1" color="primary">
                It is always a pleasure to welcome anyone interested on our
                causes
              </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Box
                bgcolor={(props) => props.palette.warning.main}
                padding="20px"
              >
                <Button
                  sx={{ fontSize: "24px", color: "#fff" }}
                  endIcon={
                    <img
                      src="/icons/circle-arrow-right-white.svg"
                      alt="icons"
                      width="20px"
                    />
                  }
                
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default _about_us_content_5;
