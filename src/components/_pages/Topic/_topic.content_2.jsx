import React from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_topic.content_2";

function _topic_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box pb="80px" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item size={{ md: 2 }}>
              <Typography variant="h4" color="primary">
                EXPLORE OUR PROJECT
              </Typography>
            </Grid>
            <Grid item size={{ md: 9 }}>
              <Grid container justifyContent="space-between">
                {React.Children.toArray(
                  [...new Array(6)].map(() => (
                    <Grid item size={{ md: 3.8 }}>
                      <Box position="relative" mb={4}>
                        <CardActionArea>
                          <Box height="250px" bgcolor="lightgray" />
                        </CardActionArea>

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
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _topic_content_2;
