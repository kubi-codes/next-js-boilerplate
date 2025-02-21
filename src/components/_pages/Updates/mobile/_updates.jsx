import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function _updates() {
  return (
    <Container>
      <Box py="100px" minHeight="100vh">
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
              <Box bgcolor="lightgray" height="400px" position="relative">
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
                    February 12, 2024
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
                    Rekontruksi Lahan Pertanian dengan Lahan Suboptimal
                  </Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Link>
        </Box>

        {React.Children.toArray(
          [...new Array(2)].map((item, key, arr) => (
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
                    <Box bgcolor="lightgray" height="170px"></Box>
                  </CardActionArea>
                </Box>
              </Link>
            </React.Fragment>
          ))
        )}
      </Box>
    </Container>
  );
}

export default _updates;
