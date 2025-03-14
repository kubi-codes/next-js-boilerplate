import React from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_topic.content_2";
import Link from "next/link";

function _topic_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <>
      <Box pb="80px" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item size={{ md: 2 }}>
              <Typography variant="h4" color="primary" sx={{mb: '30px'}}>
                EXPLORE OUR PROJECT
              </Typography>
            </Grid>
            <Grid item size={{ md: 9 , xs: 12}}>
              <Grid container justifyContent="space-between">
                {React.Children.toArray(
                  [
                    {
                      name: "Food Security",
                      link: "food-security",
                      image: "/images/food-security.jpg",
                    },
                    {
                      name: "Agliculture",
                      link: "agliculture",
                      image: "/images/agliculture.jpg",
                    },
                    {
                      name: "Suboptimal Land",
                      link: "suboptimal-land",
                      image: "/images/suboptimal-land.jpg",
                    },
                    {
                      name: "Livelihood",
                      link: "livelihood",
                      image: "/images/livelihood.jpg",
                    },
                    {
                      name: "Landscape",
                      link: "landscape",
                      image: "/images/landscape.jpg",
                    },
                    {
                      name: "Governance",
                      link: "governance",
                      image: "/images/governance.jpg",
                    },
                  ].map((item) => (
                    <Grid item size={{ md: 3.8, xs: 5.8 }}>
                      <Box position="relative" mb={4}>
                        <Link href={`/topic/${item.link}`}>
                          <CardActionArea>
                            <Box
                              height="250px"
                              bgcolor="lightgray"
                              sx={{
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: 'center'
                              }}
                            />
                          </CardActionArea>
                        </Link>

                        <Link href={`/topic/${item.link}`}>
                          <Box
                            width="80%"
                            position="absolute"
                            bottom="0px"
                            bgcolor="#fff"
                          >
                            <CardActionArea
                              sx={{
                                px: "10px",
                                py: "8px",
                              }}
                            >
                              <Box component="span" display="flex" gap={3}>
                                <Typography variant="h5" noWrap>
                                  {item.name}
                                </Typography>
                                <Box
                                  component="img"
                                  src="/icons/circle-arrow-right-success.svg"
                                  width="25px"
                                  sx={{ ml: 2 }}
                                />
                              </Box>
                            </CardActionArea>
                          </Box>
                        </Link>
                      </Box>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _topic_content_2;
