import {
  Container,
  Typography,
  CardActionArea,
  Grid2 as Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function _initiatives_content_1() {
  return (
    <Box py="30px">
      <Container>
        {[...new Array(4)].map((item) => (
          <Box position="relative" mb="20px">
            <CardActionArea>
              <Box height="200px" bgcolor="lightgray" />

              <Box position="absolute" bottom="0px" padding="10px" width="100%">
                <Box display="flex" alignItems="center" gap="20px" width="100%">
                  <Box width="85%">
                    <Typography variant="h6" color="#fff" noWrap>
                      Peatland Agriculture Sustainability
                    </Typography>
                    <Typography color="#fff" noWrap>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
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
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default _initiatives_content_1;
