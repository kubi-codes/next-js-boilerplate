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
                    <Box
                      bgcolor="lightgray"
                      height="270px"
                      position="relative"
                      sx={{
                        backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-768x430.png')`,
                        backgroundSize: "cover",
                      }}
                    >
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
                          Mar 20, 2025
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
                          Maximizing Nature’s Concealed Potential in Wetland
                          Agriculture
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Link>
              </Grid>
              <Grid item size={{ md: 4.2, sm: 4 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/lahan-gambut-untuk-pertanian-300x300.webp",
                      title:
                        "Water Management Process in Peatland for Agriculture",
                      date: "Dec 20, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/jurnal-pertanian-lahan-suboptimal-300x300.webp",
                      title:
                        "Journal of Suboptimal Land Agriculture: Optimization of Land Management",
                      date: "Dec 20, 2024",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
                          <Typography
                            variant="body2"
                            color="secondary"
                            gutterBottom
                          >
                            {item.date}
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
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="125px"
                              sx={{
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></Box>
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
              <Grid item size={{ md: 4.2, sm: 4 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/de2a2a06-7721-413a-aaf5-2721dd00a034-300x300.webp",
                      title: "National Peatland Management Strategy",
                      date: "Dec 4, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/2eb301d3-bf4e-4b94-a667-844a5e761e2a-300x300.webp",
                      title:
                        "Optimization of Peatland Utilization into Productive Land",
                      date: "Dec 4, 2024",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
                          <Typography
                            variant="body2"
                            color="secondary"
                            gutterBottom
                          >
                            {item.date}
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
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="125px"
                              sx={{
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></Box>
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
                    <Box
                      bgcolor="lightgray"
                      height="270px"
                      position="relative"
                      sx={{
                        backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/01/sustainable-peatland-management-in-indonesia-300x300.jpg')`,
                        backgroundSize: "cover",
                      }}
                    >
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
                          Jan 21, 2025
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
                          Sustainable Peatland Management in Indonesia
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Link>
              </Grid>
              <Grid item size={{ md: 4.2, sm: 4 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/04/Strategi-Pemanfaatan-Lahan-Gambut-300x171.webp",
                      title: "Strategi Pemanfaatan Lahan Gambut Berkelanjutan",
                      date: "Apr 1, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/03/Pemanfaatan-Lahan-Gambut-300x200.jpg",
                      title:
                        "Pemanfaatan Lahan Gambut untuk Pertanian Berkelanjutan",
                      date: "Mar 28, 2024",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
                          <Typography
                            variant="body2"
                            color="secondary"
                            gutterBottom
                          >
                            {item.date}
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
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="125px"
                              sx={{
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></Box>
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
              <Grid item size={{ md: 4.2, sm: 4 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2025/01/Sustainable-Peatland-Cultivation-Example-300x300.jpg",
                      title:
                        "Sustainable Peatland Cultivation Example for a Greener Future",
                      date: "Jan 21, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2025/01/Peatland-Agriculture-Potential-for-Food-Production-300x300.jpg",
                      title:
                        "Peatland Agriculture Potential for Food Production",
                      date: "Jan 21, 2025",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/updates/slug`}>
                      <Grid container justifyContent="space-between" mb={2.5}>
                        <Grid item size={{ md: 6, sm: 6 }}>
                          <Typography
                            variant="body2"
                            color="secondary"
                            gutterBottom
                          >
                            {item.date}
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
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item size={{ md: 5.5, sm: 5.5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="125px"
                              sx={{
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></Box>
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
