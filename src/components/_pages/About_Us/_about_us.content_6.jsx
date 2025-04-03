import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_about_us.content_6";

function _about_us_content_6() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [seeMore, setSeeMore] = React.useState(false);

  return (
    <>
      <Box py="50px" display={isMobile ? "none" : "block"}>
        <Container>
          <Typography
            variant="h3"
            color="primary"
            align="center"
            sx={{ mb: 3 }}
          >
            MEET OUR TEAM
          </Typography>
          <Typography align="center">
            We work in a vibrant environment with a diverse, dynamic group. Meet
            our small team with a big dream below.
          </Typography>

          <Box display="flex" justifyContent="center" mt="60px" mb="15px">
            <Box
              sx={{
                width: "255px",
                height: "255px",
                borderRadius: "50%",
                backgroundImage: `url('/images/Layer 1 copy 1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </Box>
          <Typography align="center" variant="h5" gutterBottom>
            Tay Juhana
          </Typography>
          <Typography align="center" sx={{ mb: 4 }}>
            Founder
          </Typography>

          <Grid container justifyContent="center">
            <Grid size={{ md: 7 }}>
              <Typography align="center" color="secondary">
                {seeMore
                  ? `Our foundation was named after the Founding Father of  Sambu Group, the late Mr Tay Juhana. In 1967, The Singaporean-born founder ventured to Indonesia’s Jambi Province and planted his heart and soul to build an effort that is both innovative and socially inclusive. He later decided to adopt Indonesian citizenship and dedicated the rest of his life to his business and his people. Mr Tay always envisioned the company to be holistic in all aspects and sought to build one that would simultaneously benefit farmers, business partners, customers and Mother Nature herself. With decades of tireless effort and endless perseverance, Mr Tay turned his vision into reality one step at a time. His work has been known to consistently putting the balance of all pillars of sustainability  (i.e. environmental responsibility, economic prosperity, and social justice) as its utmost priority. Tay Juhana Foundation is not simply another legacy of Mr Tay, it is the embodiment of the values of life that are essential to be embraced, in order to meet the needs of the present without compromising the ability of our future generations to meet their own needs. The one life principle of Mr Tay — that he never failed to remind all of his employees and family members — grew to be the most fundamental base of TJF.`
                  : `Our foundation was named after the Founding Father of  Sambu
              Group, the late Mr Tay Juhana. In 1967, The Singaporean-born
              founder ventured to Indonesia’s Jambi Province and planted his
              heart and soul to build an effort that is both innovative and
              socially inclusive. He later decided to adopt Indonesian
              citizenship and dedicated the rest of his life to his business and
              his people.`}
              </Typography>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "Read Short Bio" : "Read Full Bio"}
            </Button>
          </Box>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _about_us_content_6;
