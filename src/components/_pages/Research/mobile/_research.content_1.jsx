import { Container, Typography, CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Link from "next/link";

function _initiatives_content_1() {
  return (
    <Box py="30px">
      <Container>
        {[
          {
            title: "Peatland Agriculture Sustainability",
            desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
            image: "/images/bg-example.jpg",
          },
          {
            title: "Sustainable Food System",
            desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
            image: "/images/food-security.jpg",
          },
          {
            title: "Coconut Research Center",
            desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
            image: "/images/bg-example-3.jpg",
          },
          {
            title: "Coastal Agriculture Water Management",
            desc: `Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s`,
            image: "/images/bg-example-4.jpg",
          },
        ].map((item) => (
          <Box position="relative" mb="20px">
            <Link href={`/research/publication?variant=${item.title}`}>
              <CardActionArea>
                <Box
                  height="200px"
                  bgcolor="lightgray"
                  sx={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                  }}
                />

                <Box
                  sx={{
                    height: "30%",
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
                    position: "absolute",
                    bottom: 0,
                  }}
                />

                <Box
                  position="absolute"
                  bottom="0px"
                  padding="10px"
                  width="100%"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="20px"
                    width="100%"
                  >
                    <Box width="85%">
                      <Typography variant="h6" color="#fff" noWrap>
                        {item?.title}
                      </Typography>
                      <Typography color="#fff" noWrap>
                        {item?.desc}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src="/icons/circle-arrow-right-white.svg"
                      width="25px"
                    />
                  </Box>
                </Box>
              </CardActionArea>
            </Link>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default _initiatives_content_1;
