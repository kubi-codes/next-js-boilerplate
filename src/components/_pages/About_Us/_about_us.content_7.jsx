import React from "react";
import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_about_us.content_7";

function _about_us_content_7() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box py="50px" display={isMobile ? 'none' : 'block'}>
        <Container>
          <Grid container justifyContent="space-around">
            {React.Children.toArray(
              [
                {
                  name: "Tay Enoku",
                  job: "General Director",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Tay Ciaying",
                  job: "Executive Director",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Christian Hsieh",
                  job: "Advisory Boar Member",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Nurul Ihsan Fawzi",
                  job: "Opereasional Manager",
                  desc: `lorem ipsum sir dolor amet`,
                },
              ]?.map((item) => (
                <Grid size={{ md: 3.6 }}>
                  <Box border="1px solid #233E83" borderRadius="8px" mb="40px">
                    <CardActionArea
                      sx={{
                        padding: 2,
                        paddingY: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography variant="h5">{item?.name}</Typography>
                        <Typography>{item?.job}</Typography>
                      </Box>

                      <img src="/icons/chevron-down-warning.svg" alt="icons" />
                    </CardActionArea>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>

          <Grid container justifyContent="space-around">
            {React.Children.toArray(
              [
                {
                  name: "Research & Learning",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Program",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Media & Communication",
                  desc: `lorem ipsum sir dolor amet`,
                },
                {
                  name: "Office",
                  desc: `lorem ipsum sir dolor amet`,
                },
              ]?.map((item) => (
                <Grid size={{ md: 2.8 }}>
                  <Box border="1px solid #233E83" borderRadius="8px" mb="40px">
                    <CardActionArea
                      sx={{
                        padding: 2,
                        paddingY: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography variant="h5">{item?.name}</Typography>
                        <Typography>{item?.job}</Typography>
                      </Box>

                      <img src="/icons/chevron-down-warning.svg" alt="icons" />
                    </CardActionArea>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _about_us_content_7;
