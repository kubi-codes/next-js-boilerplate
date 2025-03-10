import {
  Container,
  Grid2 as Grid,
  Box,
  CardActionArea,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_initiatives.content_2";

function _initiatives_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box minHeight="80vh" mb="50px" display={isMobile ? "none" : "block"}>
        <Container>
          <Typography variant="h3" align="center" color="primary">
            EXPLORE OUR PROJECT
          </Typography>
          <Grid container justifyContent="space-between" mt="50px">
            {[
              {
                name: "Sustainable Peatland Agriculture",
                link: "/sustainable-peatland-agriculture",
              },
              {
                name: "Suboptimal Land Agriculture Initiatives",
                link: "/suboptimal-land-agricultutre-initiatives",
              },
              {
                name: "Collabowritting",
                link: "/collabowritting",
              },
              {
                name: "Food Security and Sustainability Center",
                link: "/food-security-and-sustainability-center",
              },
            ].map((item) => (
              <Grid item size={{ md: 5.8 }}>
                <Box position="relative" mb={10}>
                  <Link href={`/initiatives/${item.link}`} passHref>
                    <CardActionArea>
                      <Box height="340px" bgcolor="lightgray" />
                    </CardActionArea>
                  </Link>

                  <Box
                    width="70%"
                    position="absolute"
                    bottom="0px"
                    // marginBottom="-7%"
                    bgcolor="#fff"
                    height="50px"
                  >
                    <Link href={`/initiatives/${item.link}`} passHref>
                      <CardActionArea
                        sx={{
                          px: "10px",
                          py: "8px",
                        }}
                      >
                        <Typography component="span" gap={3} variant="h4">
                          {item.name}
                          <Box
                            component="img"
                            src="/icons/circle-arrow-right-success.svg"
                            sx={{ mb: -1, ml: 2 }}
                          />
                        </Typography>
                      </CardActionArea>
                    </Link>
                  </Box>
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

export default _initiatives_content_2;
