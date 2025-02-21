import {
  Container,
  Grid2 as Grid,
  Box,
  CardActionArea,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_initiatives.content_2";

function _initiatives_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box minHeight="80vh" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            {[...new Array(4)].map((item) => (
              <Grid item size={{ md: 5.8 }}>
                <Box position="relative" mb={10}>
                  <Link href="/initiatives/lorem" passHref>
                    <CardActionArea>
                      <Box height="340px" bgcolor="lightgray" />
                    </CardActionArea>
                  </Link>

                  <Box
                    width="60%"
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
                        }}
                      >
                        <Typography
                          component="span"
                          display="flex"
                          gap={3}
                          variant="h4"
                        >
                          Sustainable Peatland Agriculture
                          <Box
                            component="img"
                            src="/icons/circle-arrow-right-success.svg"
                            sx={{ mb: -0.5, ml: 2 }}
                          />
                        </Typography>
                      </CardActionArea>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _initiatives_content_2;
