import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_8";

function _home_content_8() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        height="45vh"
        bgcolor="lightgray"
        alignItems="center"
        sx={{
          backgroundImage: `url('/images/bg-cta.jpg')`,
          backgroundSize: "cover",
        }}
        display={isMobile ? "none" : "flex"}
      >
        <Container>
          <Typography variant="h2" color="#fff" align="center">
            BE PART OF THE FOOD FIGHTERS!
          </Typography>
          <Typography align="center" color="#fff" sx={{ mt: 3, mb: 4 }}>
            Sign up for more up-to-date videos and publications related to food
            security issue.
          </Typography>

          <Box display="flex" gap="15px" justifyContent="center">
            <TextField
              placeholder="Input your email here"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "400px",
              }}
            />
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_8;
