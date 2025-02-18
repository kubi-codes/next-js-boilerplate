import {
  Box,
  Button,
  Container,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";

function _home_content_5() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Box my="50px">
      <Container>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          LATEST ISSUES
        </Typography>
        <Typography align="center">
          Uncover the secrets to thriving on less. Explore innovative farming
          practices for suboptimal lands in our new issue:
        </Typography>

        <Box
          sx={{
            "& .slick-slide": { width: "180px !important" },
            "& .slick-dots li": {
              margin: "0px !important",
              width: "10px !important",
            },
          }}
          mt="25px"
          mb="50px"
        >
          <Slider {...settings}>
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
                <Box paddingRight="20px">
                  <CardActionArea>
                    <Box
                      height="220px"
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
                </Box>
              ))
            )}
          </Slider>
        </Box>

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="warning">
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _home_content_5;
