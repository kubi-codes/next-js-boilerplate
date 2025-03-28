import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  CardActionArea,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_topic_detail.content_1";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";
import { useParams } from "next/navigation";

const capitalize = (str) => {
  return str
    .split("-") // Pisahkan slug berdasarkan "-"
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi setiap kata
    .join(" "); // Gabungkan kembali dengan spasi
};

function _topic_detail_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const params = useParams();
  const topic = capitalize(params?.slug);

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container>
          <Box py="7%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography variant="h4" color="primary">
                {topic} <br /> Latest Updates
              </Typography>

              <Box display="flex" gap="5px">
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CirclePrev color="#979797" fontSize="33px" />
                </IconButton>
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CircleNext color="#233E83" fontSize="33px" />
                </IconButton>
              </Box>
            </Box>

            <Grid container justifyContent="space-between" mt="40px">
              <Grid item size={{ md: 3.3, sm: 3.8 }}>
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
              <Grid item size={{ md: 4, sm: 3.8 }}>
                {React.Children.toArray(
                  [...new Array(3)].map((item, key, arr) => (
                    <Link href={"#"}>
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
                        <Grid item size={{ md: 5.5, sm: 5 }}>
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
              <Grid item size={{ md: 4, sm: 3.8 }}>
                {React.Children.toArray(
                  [...new Array(3)].map((item, key, arr) => (
                    <Link href={"#"}>
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
                        <Grid item size={{ md: 5.5, sm: 5 }}>
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

export default _topic_detail_content_1;
