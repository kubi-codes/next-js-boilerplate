import {
  Container,
  Typography,
  Box,
  Button,
  Grid2 as Grid,
} from "@mui/material";
import React from "react";

function _updates_detail() {
  return (
    <>
      <Box py="7%">
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
    </>
  );
}

export default _updates_detail;
