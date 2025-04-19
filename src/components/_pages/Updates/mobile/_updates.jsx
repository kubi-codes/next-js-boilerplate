import {
  Container,
  Typography,
  Box,
  CardActionArea,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";

function _updates() {
  return (
    <Container>
      <Box pt="100px" pb="50px" minHeight="100vh">
        <Box mb="30px">
          <Typography variant="h1" color="primary" gutterBottom>
            LATEST UPDATES
          </Typography>
          <Typography>
            Have a read of our latest news releases and feature stories from our
            team.
          </Typography>
        </Box>

        <Box mb="50px">
          <Link href={`/updates/slug`}>
            <CardActionArea>
              <Box
                bgcolor="lightgray"
                height="400px"
                sx={{
                  backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-768x430.png')`,
                  backgroundSize: "cover",
                }}
                position="relative"
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
                  <Typography variant="body2" color="secondary" gutterBottom>
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
        </Box>

        {React.Children.toArray(
          [
            {
              image:
                "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/lahan-gambut-untuk-pertanian-300x300.webp",
              title: "Water Management Process in Peatland for Agriculture",
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
            <React.Fragment>
              <Box
                component="hr"
                sx={{
                  mt: "30px",
                  mb: "20px",
                  borderColor: (props) => props.palette.secondary.main,
                  borderTop: "1px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  // borderBottom: "1px",
                }}
              />

              <Link href={`/updates/slug`}>
                <Box>
                  <Typography variant="body2" color="secondary" gutterBottom>
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
                    gutterBottom
                  >
                    Konteks Masa Lalu dalam Pembangunan Berkelanjutan
                  </Typography>

                  <CardActionArea>
                    <Box
                      bgcolor="lightgray"
                      height="170px"
                      sx={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                  </CardActionArea>
                </Box>
              </Link>
            </React.Fragment>
          ))
        )}

        <Box
          component="hr"
          sx={{
            mt: "30px",
            mb: "20px",
            borderColor: (props) => props.palette.secondary.main,
            borderTop: "1px",
            borderLeft: "0px",
            borderRight: "0px",
            // borderBottom: "1px",
          }}
        />

        <Box my="50px">
          <Link href={`/updates/slug`}>
            <CardActionArea>
              <Box
                bgcolor="lightgray"
                height="400px"
                sx={{
                  backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-768x430.png')`,
                  backgroundSize: "cover",
                }}
                position="relative"
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
                  <Typography variant="body2" color="secondary" gutterBottom>
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
        </Box>

        {React.Children.toArray(
          [
            {
              image:
                "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/lahan-gambut-untuk-pertanian-300x300.webp",
              title: "Water Management Process in Peatland for Agriculture",
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
            <React.Fragment>
              <Box
                component="hr"
                sx={{
                  mt: "30px",
                  mb: "20px",
                  borderColor: (props) => props.palette.secondary.main,
                  borderTop: "1px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  // borderBottom: "1px",
                }}
              />

              <Link href={`/updates/slug`}>
                <Box>
                  <Typography variant="body2" color="secondary" gutterBottom>
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
                    gutterBottom
                  >
                    Konteks Masa Lalu dalam Pembangunan Berkelanjutan
                  </Typography>

                  <CardActionArea>
                    <Box
                      bgcolor="lightgray"
                      height="170px"
                      sx={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                  </CardActionArea>
                </Box>
              </Link>
            </React.Fragment>
          ))
        )}

        <Box display="flex" gap="5px" mt="30px" justifyContent="flex-end">
          <IconButton sx={{ padding: "5px", height: "45px" }}>
            <CirclePrev color="#979797" fontSize="33px" />
          </IconButton>
          <IconButton sx={{ padding: "5px", height: "45px" }}>
            <CircleNext color="#233E83" fontSize="33px" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default _updates;
