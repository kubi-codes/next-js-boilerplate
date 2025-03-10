import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function _topic_detail_content_1() {
  return (
    <Container>
      <Box py="7%">
        <Typography variant="h5" color="primary" mb="40px">
          Food Security <br /> Latest Updates
        </Typography>

        <Link href="#">
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

        <Box mt="40px">
          {React.Children.toArray(
            [...new Array(3)].map((item, key, arr) => (
              <Link href={"#"}>
                <Box>
                  <Box
                    component="hr"
                    sx={{
                      my: 2,
                      borderColor: (props) => props.palette.secondary.main,
                      borderTop: "1px",
                      borderLeft: "0px",
                      borderRight: "0px",
                      // borderBottom: "1px",
                    }}
                  />

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
            ))
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default _topic_detail_content_1;
