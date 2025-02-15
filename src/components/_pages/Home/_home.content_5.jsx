import {
  Box,
  Button,
  CardActionArea,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";

function _home_content_5() {
  return (
    <Box mt="15vh">
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Grid item size={{ md: 6 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              LATEST ISSUES
            </Typography>
            <Typography>
              Uncover the secrets to thriving on less. Explore innovative
              farming practices for suboptimal lands in our new issue:
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="warning"
              sx={{ padding: "16px 32px" }}
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
          {React.Children.toArray(
            [
              {
                image: "/images/magazine-example.jpg",
                label: "Magazine",
                date: "Dec, 2025",
              },
              {
                image: "/images/magazine-example.jpg",
                label: "Magazine",
                date: "Dec, 2025",
              },
              {
                image: "/images/magazine-example.jpg",
                label: "Magazine",
                date: "Dec, 2025",
              },
              {
                image: "/images/magazine-example.jpg",
                label: "Magazine",
                date: "Dec, 2025",
              },
            ].map((item) => (
              <Grid item size={{ md: 2.8 }}>
                <CardActionArea>
                  <Box
                    height="450px"
                    // bgcolor="lightgray"
                    mb={1}
                    sx={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                    }}
                  ></Box>
                </CardActionArea>
                <Typography>{item.label}</Typography>
                <Typography color="secondary" fontSize="14px">
                  {item.date}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default _home_content_5;
