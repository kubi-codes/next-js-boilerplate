import {
  Container,
  Typography,
  Box,
  Button,
  Grid2 as Grid,
  CardActionArea,
} from "@mui/material";
import React from "react";
import Link from "next/link";

function _updates_detail() {
  return (
    <>
      <Box pt="7%">
        <Container>
          <Typography variant="h1" align="center" color="primary">
            Lorem Ipsum
          </Typography>

          <Box display="flex" justifyContent="center" py={2}>
            <Button variant="contained" color="warning">
              Tag Topic
            </Button>
          </Box>

          <Typography color="secondary" align="center" fontSize="24px">
            December 23, 2023
          </Typography>

          <Grid container justifyContent="center" mt="80px" mb="80px">
            <Grid size={{ md: 9 }}>
              <Box sx={{ backgroundColor: "lightgray", height: "600px" }} />
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between">
            <Grid size={{ md: 8 }}>
              <Typography variant="h5" gutterBottom>
                Lorem Ipsum
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                delectus tenetur ea. Culpa, aliquid distinctio natus dolorem,
                unde necessitatibus pariatur id hic commodi sunt illo
                reprehenderit, nisi corrupti sit cum?
              </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Typography variant="h6" ml="10px" gutterBottom>
                Contributor
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                mt="15px"
                mb="50px"
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                    bgcolor: "lightgray",
                  }}
                />
                <Box>
                  <Typography variant="h6" noWrap>
                    Ratu Nabilah
                  </Typography>
                  <Typography>Jakarta</Typography>
                </Box>
              </Box>

              <Typography variant="h6" ml="10px">
                Share This Article
              </Typography>

              <Box ml="10px" display="flex" gap="25px" mt="10px">
                {React.Children.toArray(
                  [
                    "facebook-logo.svg",
                    "twitter-logo.svg",
                    "linkedin-logo.svg",
                    "whatsapp-logo.svg",
                  ].map((item) => (
                    <img src={`/icons/${item}`} alt="icon" width="25px" />
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box pb="100px" pt="50px">
        <Container>
          <Grid container justifyContent="space-between">
            <Grid size={{ md: 3 }}>
              <Box sx={{ borderBottom: "6px solid #000000", mb: "30px" }} />

              <Typography variant="h4" color="primary">
                RELATED
                <br />
                ARTICLE
              </Typography>
            </Grid>
            <Grid size={{ md: 8.5 }}>
              <Box sx={{ borderBottom: "1px solid #000000" }} />

              <Grid container justifyContent="space-between" mt="30px">
                {React.Children.toArray(
                  [...new Array(4)].map((item, key, arr) => (
                    <Grid size={{ md: 5.8 }} sx={{ mb: 3 }}>
                      <Link href={`/updates/slug`}>
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
                        </Grid>
                      </Link>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default _updates_detail;
