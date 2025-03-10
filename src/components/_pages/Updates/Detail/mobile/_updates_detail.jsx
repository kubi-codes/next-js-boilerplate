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
      <Box pt="100px">
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

          <Box
            sx={{
              backgroundColor: "lightgray",
              height: "250px",
              mt: "50px",
              mb: "40px",
            }}
          />

          <Typography variant="h6" gutterBottom>
            Lorem Ipsum
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            delectus tenetur ea. Culpa, aliquid distinctio natus dolorem, unde
            necessitatibus pariatur id hic commodi sunt illo reprehenderit, nisi
            corrupti sit cum?
          </Typography>

          <Typography variant="h6" sx={{ mt: "40px" }} gutterBottom>
            Contributor
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap="15px"
            mt="15px"
            mb="40px"
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

          <Typography variant="h6">Share This Article</Typography>

          <Box ml="10px" display="flex" gap="25px" mt="10px">
            {React.Children.toArray(
              [
                "facebook-logo.svg",
                "twitter-logo.svg",
                "linkedin-logo.svg",
                "whatsapp-logo.svg",
              ].map((item) => (
                <img src={`/icons/${item}`} alt="icon" width="30px" />
              ))
            )}
          </Box>
        </Container>
      </Box>

      <Box pb="100px" pt="50px">
        <Container>
          <Box
            sx={{ borderBottom: "2px solid #000000", mb: "10px", width: "50%" }}
          />

          <Typography variant="h4" color="primary" sx={{mb: '40px'}}>
            RELATED
            <br />
            ARTICLE
          </Typography>

          {React.Children.toArray(
            [...new Array(4)].map((item, key, arr) => (
              <Grid size={{ md: 5.8 }} sx={{ mb: 3 }}>
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
                      <Box bgcolor="lightgray" height="180px"></Box>
                    </CardActionArea>
                  </Box>
                </Link>
              </Grid>
            ))
          )}
        </Container>
      </Box>
    </>
  );
}

export default _updates_detail;
