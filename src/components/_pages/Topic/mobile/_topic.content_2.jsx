import React from "react";
import Link from "next/link";
import { Box, Container, Typography, CardActionArea } from "@mui/material";

function _topic_content_2() {
  return (
    <Box pb="80px">
      <Container>
        <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
          EXPLORE
          <br /> OUR PROJECT
        </Typography>

        {React.Children.toArray(
          [
            {
              name: "Food Security",
              link: "food-security",
              image: "/images/food-security.jpg",
            },
            {
              name: "Agliculture",
              link: "agliculture",
              image: "/images/agliculture.jpg",
            },
            {
              name: "Suboptimal Land",
              link: "suboptimal-land",
              image: "/images/suboptimal-land.jpg",
            },
            {
              name: "Livelihood",
              link: "livelihood",
              image: "/images/livelihood.jpg",
            },
            {
              name: "Landscape",
              link: "landscape",
              image: "/images/landscape.jpg",
            },
            {
              name: "Governance",
              link: "governance",
              image: "/images/governance.jpg",
            },
          ].map((item) => (
            <Box position="relative" mb={4}>
              <Link href={`/topic/${item.link}`}>
                <CardActionArea>
                  <Box
                    height="220px"
                    bgcolor="lightgray"
                    sx={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </CardActionArea>
              </Link>

              <Link href={`/topic/${item.link}`}>
                <Box
                  width="80%"
                  position="absolute"
                  bottom="0px"
                  bgcolor="#fff"
                >
                  <CardActionArea
                    sx={{
                      px: "10px",
                      py: "8px",
                    }}
                  >
                    <Box component="span" display="flex" gap={3}>
                      <Typography variant="h5" noWrap>
                        {item.name}
                      </Typography>
                      <Box
                        component="img"
                        src="/icons/circle-arrow-right-success.svg"
                        width="25px"
                        sx={{ ml: 2 }}
                      />
                    </Box>
                  </CardActionArea>
                </Box>
              </Link>
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
}

export default _topic_content_2;
