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
        {[...new Array(4)].map((item) => (
          <Box position="relative" mb="40px">
            <Link href="/initiatives/lorem" passHref>
              <CardActionArea>
                <Box height="220px" bgcolor="lightgray" />
              </CardActionArea>
            </Link>

            <Box
              width="80%"
              position="absolute"
              bottom="0px"
              marginBottom="-7%"
              bgcolor="#fff"
            >
              <Link href="/initiatives/lorem" passHref>
                <CardActionArea
                  sx={{
                    px: "10px",
                    py: "8px",
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}
                >
                  <Typography
                    component="span"
                    display="flex"
                    gap={3}
                    variant="h4"
                    fontSize="20px"
                  >
                    Sustainable Peatland Agriculture
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
