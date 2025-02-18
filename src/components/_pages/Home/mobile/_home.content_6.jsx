import {
  Container,
  Typography,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function _home_content_6() {
  return (
    <Box mt="30px" mb="50px">
      <Container>
        <Typography variant="h5" color="primary">
          Unleash The Potential
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          Weekly Insights on Sustainable Suboptimal Farming
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Discover weekly insights on sustainablefarming in suboptimal lands and
          join usin building a greener future.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ px: "32px", py: "18px", mb: 3 }}
        >
          Browse
        </Button>

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
              <Box>
                <Box
                  component="hr"
                  sx={{
                    mt: 2,
                    borderColor: (props) => props.palette.secondary.main,
                    borderTop: "1px",
                    borderLeft: "0px",
                    borderRight: "0px",
                    // borderBottom: "1px",
                  }}
                />

                <Link href={"#"}>
                  <Box mt="20px" mb="20px">
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
                        mb: 1,
                      }}
                    >
                      Konteks Masa Lalu dalam Pembangunan Berkelanjutan
                    </Typography>

                    <CardActionArea>
                      <Box bgcolor="lightgray" height="170px"></Box>
                    </CardActionArea>
                  </Box>
                </Link>
              </Box>
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_6;
