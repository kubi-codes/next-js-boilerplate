import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
  IconButton
} from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_4";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";

function _home_content_4() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imageSlider = ["images/bg-example.jpg", "images/bg-example-4.jpg"];
  const [selected, setSelected] = React.useState(0);

  const handleNext = () => {
    setSelected((prev) => (prev + 1) % imageSlider.length);
  };

  const handlePrev = () => {
    setSelected((prev) => (prev - 1 + imageSlider.length) % imageSlider.length);
  };

  return (
    <>
      <Box
        minHeight="500px"
        position="relative"
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Grid container justifyContent="space-between">
            <Grid
              item
              size={{ md: 5 }}
              position="relative"
              display="flex"
              alignItems="center"
              height="400px"
            >
              <Box
                sx={{ backgroundImage: `url('/images/bg-grid.png')` }}
                height="300px"
                width="50vw"
                position="absolute"
                zIndex={0}
                top={0}
                left={0}
              />
              <Box zIndex={1} pt="50px">
                <Box
                  bgcolor={(props) => props.palette.warning.main}
                  display="inline-block"
                  pt={1}
                  pb={0.5}
                  paddingX={2}
                  mb={1}
                >
                  <Typography color="#fff">
                    Food Security ans Sustainability Center
                  </Typography>
                </Box>
                <Typography variant="h4" color="primary" gutterBottom>
                  The Future of
                  <br />
                  Suboptimal Land <br />
                  Agriculture
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  From peatland to our plate Uncover innovative solutions for
                  sustainable farming on peatlands through TJF's groundbreaking
                  research. Sustainable Peatland Agriculture Discover how we're
                  transforming 20 hectares of suboptimal land into a thriving
                  integrated farm.
                </Typography>
                <Button variant="contained" color="success">
                  Read Full Story
                </Button>
              </Box>
            </Grid>
            <Grid item size={{ md: 5 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    height: "500px",
                    backgroundColor: "lightgray",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "absolute",

                    backgroundImage: `url(${imageSlider[selected]})`,
                    backgroundSize: "cover",
                    width: "50vw",
                    right: -8,

                    zIndex: 1,
                  }}
                />
              </AnimatePresence>

              <Box
                display="flex"
                gap="5px"
                position="absolute"
                zIndex={1}
                bottom={10}
                left="51%"
              >
                <IconButton
                  sx={{ padding: "5px", height: "45px" }}
                  onClick={handlePrev}
                >
                  <CirclePrev color="#fff" fontSize="25px" />
                </IconButton>
                <IconButton
                  sx={{ padding: "5px", height: "45px" }}
                  onClick={handleNext}
                >
                  <CircleNext color="#fff" fontSize="35px" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_4;
