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
              <Grid item size={{ md: 3.2, sm: 3.8 }}>
                <Link href={`/topic/${params?.slug}/slug`}>
                  <CardActionArea>
                    <Box
                      bgcolor="lightgray"
                      height="400px"
                      position="relative"
                      sx={{
                        backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-1024x573.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                          March 20, 2025
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
              <Grid item size={{ md: 4.2, sm: 3.8 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/10/DSC07729-1024x580.jpg",
                      title:
                        "Tay Juhana Foundation Achieves Success at World Coconut Day 2024",
                      date: "Oct 8, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/08/DSC01072-2-1-1024x684.jpg",
                      title:
                        "Peran Lahan Gambut dalam Memenuhi Kebutuhan Pangan Lokal",
                      date: "Aug 29, 2022",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/02/btc-1-80-1024x1024.jpg",
                      title:
                        "Wetlands Day #bringthecaption Challenge: Retell the Nostalgic Pictures with Joni",
                      date: "Feb 11, 2022",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/topic/${params?.slug}/slug`}>
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
                        <Grid item size={{ md: 5.5, sm: 5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="115px"
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
              <Grid item size={{ md: 4.2, sm: 3.8 }}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/10/DSC07729-1024x580.jpg",
                      title:
                        "Tay Juhana Foundation Achieves Success at World Coconut Day 2024",
                      date: "Oct 8, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/08/DSC01072-2-1-1024x684.jpg",
                      title:
                        "Peran Lahan Gambut dalam Memenuhi Kebutuhan Pangan Lokal",
                      date: "Aug 29, 2022",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/02/btc-1-80-1024x1024.jpg",
                      title:
                        "Wetlands Day #bringthecaption Challenge: Retell the Nostalgic Pictures with Joni",
                      date: "Feb 11, 2022",
                    },
                  ].map((item, key, arr) => (
                    <Link href={`/topic/${params?.slug}/slug`}>
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
                        <Grid item size={{ md: 5.5, sm: 5 }}>
                          <CardActionArea>
                            <Box
                              bgcolor="lightgray"
                              height="115px"
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

export default _topic_detail_content_1;
