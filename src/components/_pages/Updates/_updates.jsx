import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  IconButton,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_updates";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";

function _updates() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container>
          <Box pb="7%" pt="14%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box>
                <Typography variant="h1" color="primary">
                  LATEST UPDATES
                </Typography>
                <Typography>
                  Have a read of our latest news releases and feature stories
                  from our team.
                </Typography>
              </Box>

              <Box display="flex" gap="5px">
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CirclePrev color="#979797" fontSize="33px" />
                </IconButton>
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CircleNext color="#233E83" fontSize="33px" />
                </IconButton>
              </Box>
            </Box>

            <Grid container justifyContent="space-between" mt="70px">
              <Grid item size={{ md: 3.3, sm: 3.3 }}>
                <Link href={`/updates/slug`}>
                  <CardActionArea>
                    <Box bgcolor="lightgray" height="270px" position="relative">
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
              <Grid item size={{ md: 4, sm: 4 }}>
                {React.Children.toArray(
                  [...new Array(2)].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
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
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box bgcolor="lightgray" height="115px"></Box>
                          </CardActionArea>
                        </Grid>

                        {arr.length - 1 !== key && (
                          <Grid item size={{ md: 12, sm: 12 }}>
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
              <Grid item size={{ md: 4, sm: 4 }}>
                {React.Children.toArray(
                  [...new Array(2)].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
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
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box bgcolor="lightgray" height="115px"></Box>
                          </CardActionArea>
                        </Grid>

                        {arr.length - 1 !== key && (
                          <Grid item size={{ md: 12, sm: 12 }}>
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

            <Grid container justifyContent="space-between" mt="30px">
              <Grid item size={{ md: 3.3, sm: 3.3 }}>
                <Link href={`/updates/slug`}>
                  <CardActionArea>
                    <Box bgcolor="lightgray" height="270px" position="relative">
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
              <Grid item size={{ md: 4, sm: 4 }}>
                {React.Children.toArray(
                  [...new Array(2)].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
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
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box bgcolor="lightgray" height="115px"></Box>
                          </CardActionArea>
                        </Grid>

                        {arr.length - 1 !== key && (
                          <Grid item size={{ md: 12, sm: 12 }}>
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
              <Grid item size={{ md: 4, sm: 4 }}>
                {React.Children.toArray(
                  [...new Array(2)].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
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
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box bgcolor="lightgray" height="115px"></Box>
                          </CardActionArea>
                        </Grid>

                        {arr.length - 1 !== key && (
                          <Grid item size={{ md: 12, sm: 12 }}>
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
          </Box>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _updates;
