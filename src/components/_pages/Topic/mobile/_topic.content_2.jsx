import React from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

function _topic_content_2() {
  return (
    <Box pb="80px">
      <Container>
        <Typography variant="h5" color="primary" sx={{ mb: 3}}>
          EXPLORE
          <br /> OUR PROJECT
        </Typography>

        {React.Children.toArray(
          [...new Array(6)].map(() => (
            <Box position="relative" mb={4}>
              <CardActionArea>
                <Box height="220px" bgcolor="lightgray" />
              </CardActionArea>

              <Box width="80%" position="absolute" bottom="0px" bgcolor="#fff">
                <CardActionArea
                  sx={{
                    px: "10px",
                    py: "8px",
                  }}
                >
                  <Box component="span" display="flex" gap={3}>
                    <Typography variant="h5" noWrap>
                      Sustainable Peatland Agriculture
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
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
}

export default _topic_content_2;
