import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_career.content_1";
import Link from "next/link";

function _career_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid
              size={{ md: 5 }}
              height="90vh"
              display="flex"
              alignItems="center"
            >
              <Box>
                <Typography variant="body1" fontSize="36px" gutterBottom>
                  Careers at
                </Typography>

                <Typography variant="h1" color="primary" sx={{ mb: 4 }}>
                  Tay Juhana Foundation
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  If you value action, teamwork, and are always looking for ways
                  to innovate, Tay Juhana Foundation is the place for you! See
                  below for current career opportunities and learn more about
                  what you could be part of if you join Tay Juhana Foundation.
                </Typography>

                <Link href={`#content`}>
                  <Button variant="contained" color="success">
                    See Open Position
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ md: 6 }} position="relative">
              <Box
                sx={{
                  backgroundImage: `url('/images/bg-career.png')`,
                  height: "88vh",
                  position: "absolute",
                  width: "50vw",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "right",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _career_content_1;
