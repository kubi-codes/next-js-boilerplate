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
    <Box py="80px">
      <Container>
        <Grid container justifyContent="space-between">
          {[...new Array(4)].map((item) => (
            <Grid item size={{ md: 5.8 }}>
              <Box position="relative" mb={7}>
                <CardActionArea>
                  <Box height="400px" bgcolor="lightgray" />

                  <Box
                    position="absolute"
                    bottom="0px"
                    padding="30px"
                    width="85%"
                  >
                    <Typography variant="h5" color="#fff" gutterBottom>
                      Peatland Agriculture Sustainability
                    </Typography>
                    <Box display="flex" alignItems="center" gap="20px">
                      <Typography color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Typography>

                      <Box
                        component="img"
                        src="/icons/circle-arrow-right-white.svg"
                      />
                    </Box>
                  </Box>
                </CardActionArea>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default _initiatives_content_1;
