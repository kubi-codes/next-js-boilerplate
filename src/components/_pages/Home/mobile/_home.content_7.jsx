import {
  Container,
  Typography,
  Box,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import React from "react";

function _home_content_7() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/bg-grid.png')`,
          paddingTop: "30px",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            color="primary"
            align="center"
            sx={{ mb: 3 }}
          >
            Our Partners
          </Typography>

          <Box display="flex" justifyContent="center" mb="30px">
            <img src="images/partner-1.png" width="265px" alt="partner" />
          </Box>

          <Box display="flex" justifyContent="center" mb="30px">
            <img src="images/partner-2.png" width="300px" alt="partner" />
          </Box>

          <Box display="flex" justifyContent="center" mb="40px">
            <img src="images/partner-3.png" width="220px" alt="partner" />
          </Box>
        </Container>

        <Box
          bgcolor={(props) => props.palette.warning.main}
          paddingY="15px"
          width="100vw"
        >
          <Button
            sx={{
              fontSize: "24px",
              color: "#fff",
              textAlign: "left",
              alignItems: "flex-end",
            }}
            endIcon={
              <img
                src="/icons/circle-arrow-right-white.svg"
                alt="icons"
                width="20px"
              />
            }
          >
            Join Us to Securing Our <br />
            <br /> Future Food Together
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default _home_content_7;
