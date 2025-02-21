import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_6";

function _home_content_6() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        minHeight="90vh"
        display={isMobile ? "none" : "flex"}
        alignItems="center"
      >
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item size={{ md: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Unleash The Potential
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
                Weekly Insights on Sustainable Suboptimal Farming
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Discover weekly insights on sustainablefarming in suboptimal
                lands and join usin building a greener future.
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ px: "32px", py: "18px" }}
              >
                Browse
              </Button>
            </Grid>
            <Grid item size={{ md: 3.3 }}>
              <Link href="#">
                <CardActionArea>
                  <Box bgcolor="lightgray" height="400px" position="relative">
                    <Box
                      bgcolor="#fff"
                      height="100px"
                      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
                      position="absolute"
                      width="90%"
                      bottom="-20px"
                      right={0}
                      padding="10px 20px"
                    >
                      <Typography
                        variant="body2"
                        color="secondary"
                        gutterBottom
                      >
                        February 12, 2024
                      </Typography>
                      <Typography
                        variant="h6"
                        fontSize="16px"
                        sx={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          WebkitLineClamp: 2, // Membatasi ke 2 baris
                        }}
                      >
                        Rekontruksi Lahan Pertanian dengan Lahan Suboptimal
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Link>
            </Grid>
            <Grid item size={{ md: 4 }}>
              {React.Children.toArray(
                [...new Array(3)].map((item, key, arr) => (
                  <Link href={"#"}>
                    <Grid container justifyContent="space-between" mb={2.5}>
                      <Grid item size={{ md: 6 }}>
                        <Typography
                          variant="body2"
                          color="secondary"
                          gutterBottom
                        >
                          December 23, 2023
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitLineClamp: 3, // Membatasi ke 2 baris
                          }}
                        >
                          Konteks Masa Lalu dalam Pembangunan Berkelanjutan
                        </Typography>
                      </Grid>
                      <Grid item size={{ md: 5.5 }}>
                        <CardActionArea>
                          <Box bgcolor="lightgray" height="115px"></Box>
                        </CardActionArea>
                      </Grid>

                      {arr.length - 1 !== key && (
                        <Grid item size={{ md: 12 }}>
                          <Box
                            component="hr"
                            sx={{
                              mt: 2,
                              borderColor: (props) =>
                                props.palette.secondary.main,
                              borderTop: "1px",
                              borderLeft: "0px",
                              borderRight: "0px",
                              // borderBottom: "1px",
                            }}
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Link>
                ))
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_6;
