import {
  Container,
  Grid2 as Grid,
  Box,
  CardActionArea,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function _initiatives_content_2() {
  return (
    <Box>
      <Container>
        <Typography
          variant="h5"
          align="left"
          color="primary"
          sx={{ mb: "20px", mt: "20px" }}
        >
          EXPLORE
          <br /> OUR PROJECT
        </Typography>

        {[
          {
            name: "Sustainable Peatland Agriculture",
            link: "/sustainable-peatland-agriculture",
          },
          {
            name: "Suboptimal Land Agriculture Initiatives",
            link: "/suboptimal-land-agricultutre-initiatives",
          },
          {
            name: "Collabowritting",
            link: "/collabowritting",
          },
          {
            name: "Food Security and Sustainability Center",
            link: "/food-security-and-sustainability-center",
          },
        ].map((item, key) => (
          <Box position="relative" mb="30px">
            <Link href={`/initiatives/${item.link}`} passHref>
              <CardActionArea>
                <Box height="220px" bgcolor="lightgray" />
              </CardActionArea>
            </Link>

            <Box
              width="80%"
              position="absolute"
              bottom="0px"
              // marginBottom="-7%"
              bgcolor="#fff"
              minHeight="70px"
              display="flex"
              alignItems="center"
              right={key % 2 === 1 ? "0px" : "inherit"}
            >
              <Link href={`/initiatives/${item.link}`} passHref>
                <CardActionArea
                  sx={{
                    px: "10px",
                    py: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    component="span"
                    display="flex"
                    gap={3}
                    variant="h4"
                    fontSize="20px"
                  >
                    {item.name}
                  </Typography>
                  <Box
                    component="img"
                    src="/icons/circle-arrow-right-success.svg"
                    width="24px"
                  />
                </CardActionArea>
              </Link>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default _initiatives_content_2;
