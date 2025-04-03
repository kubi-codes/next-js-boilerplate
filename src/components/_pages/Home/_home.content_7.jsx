import {
  Container,
  Typography,
  Box,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_7";
import Link from "next/link";

function _home_content_7() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/bg-grid.png')`,
          paddingY: "40px",
        }}
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Typography variant="h4" color="primary" sx={{ mb: 5 }}>
            Our Partners
          </Typography>

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item size={{ md: 3 }}>
              <Box
                sx={{
                  height: "90px",
                  backgroundImage: `url('/images/partner-1.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>

            <Grid item size={{ md: 3 }}>
              <Box
                sx={{
                  height: "90px",
                  backgroundImage: `url('/images/partner-2.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>

            <Grid item size={{ md: 3 }}>
              <Box
                sx={{
                  height: "90px",
                  backgroundImage: `url('/images/partner-3.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>

            <Grid item size={{ md: 2 }}>
              <Box
                bgcolor={(props) => props.palette.warning.main}
                padding="21px"
                width="30vw"
              >
                <Link href={`/contact-us`}>
                  <Button
                    sx={{
                      fontSize: "24px",
                      color: "#fff",
                      textAlign: "left",
                      alignItems: "flex-end",
                    }}
                    endIcon={
                      <img
                        src="/icons/circle-arrow-right-white.svg"
                        alt="icons"
                        width="20px"
                      />
                    }
                  >
                    Join Us to Securing Our <br />
                    <br /> Future Food Together
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_7;
