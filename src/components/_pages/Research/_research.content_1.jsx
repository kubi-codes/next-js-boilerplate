import {
  Container,
  Typography,
  CardActionArea,
  Grid2 as Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_research.content_1";
import Link from "next/link";

function _initiatives_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", 'sm'));

  return (
    <>
      <Box py="80px" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            {[
              {
                title: "Peatland Agriculture Sustainability",
                desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
                image: "/images/bg-example.jpg",
              },
              {
                title: "Sustainable Food System",
                desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
                image: "/images/food-security.jpg",
              },
              {
                title: "Coconut Research Center",
                desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
                image: "/images/bg-example-3.jpg",
              },
              {
                title: "Coastal Agriculture Water Management",
                desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
                image: "/images/bg-example-4.jpg",
              },
            ].map((item) => (
              <Grid item size={{ md: 5.8, sm: 12 }}>
                <Box position="relative" mb={7}>
                  <Link href={`/research/publication?variant=${item.title}`}>
                    <CardActionArea>
                      <Box
                        height="400px"
                        bgcolor="lightgray"
                        sx={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                        }}
                      />

                      <Box
                        sx={{
                          height: "60%",
                          width: "100%",
                          backgroundImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
                          position: "absolute",
                          bottom: 0,
                        }}
                      />

                      <Box
                        position="absolute"
                        bottom="0px"
                        padding="30px"
                        width="85%"
                      >
                        <Typography variant="h5" color="#fff" gutterBottom>
                          {item?.title}
                        </Typography>
                        <Box display="flex" alignItems="center" gap="20px">
                          <Typography color="#fff">{item?.desc}</Typography>

                          <Box
                            component="img"
                            src="/icons/circle-arrow-right-white.svg"
                          />
                        </Box>
                      </Box>
                    </CardActionArea>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _initiatives_content_1;
