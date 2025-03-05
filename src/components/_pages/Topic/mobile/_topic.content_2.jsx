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
            },
            {
              name: "Agliculture",
              link: "agliculture",
            },
            {
              name: "Suboptimal Land",
              link: "suboptimal-land",
            },
            {
              name: "Livelihood",
              link: "livelihood",
            },
            {
              name: "Landscape",
              link: "landscape",
            },
            {
              name: "Governance",
              link: "governance",
            },
          ].map((item) => (
            <Box position="relative" mb={4}>
              <Link href={`/topic/${item.link}`}>
                <CardActionArea>
                  <Box height="220px" bgcolor="lightgray" />
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
