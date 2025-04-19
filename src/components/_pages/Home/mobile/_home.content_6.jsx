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
        <Link href={`/updates`}>
          <Button
            variant="contained"
            color="success"
            sx={{ px: "32px", py: "18px", mb: 3 }}
          >
            Browse
          </Button>
        </Link>

        <Link href={`/updates/slug`}>
          <CardActionArea>
            <Box
              bgcolor="lightgray"
              height="400px"
              position="relative"
              sx={{
                backgroundImage: `url('https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-1024x573.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
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
                  March 20, 2025
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
                  Maximizing Nature’s Concealed Potential in Wetland Agriculture
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Link>

        <Box mt="40px">
          {React.Children.toArray(
            [
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/lahan-gambut-untuk-pertanian.webp",
                title: "Water Management Process in Peatland for Agriculture",
                date: "Dec 20, 2024",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/jurnal-pertanian-lahan-suboptimal.webp",
                title:
                  "Journal of Suboptimal Land Agriculture: Optimization of Land Management",
                date: "Dec 20, 2024",
              },
              {
                image:
                  "https://tayjuhanafoundation.org/wp-content/uploads/2024/12/de2a2a06-7721-413a-aaf5-2721dd00a034.webp",
                title: "National Peatland Management Strategy",
                date: "Dec 4, 2024",
              },
            ].map((item, key, arr) => (
              <Box>
                <Link href={`/updates/slug`}>
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
                </Link>

                <Link href={`/updates/slug`}>
                  <Box mt="20px" mb="20px">
                    <Typography variant="body2" color="secondary" gutterBottom>
                      {item.date}
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
                      {item.title}
                    </Typography>

                    <CardActionArea>
                      <Box
                        bgcolor="lightgray"
                        height="170px"
                        sx={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></Box>
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
