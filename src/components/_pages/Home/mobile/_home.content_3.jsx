import {
  Box,
  Container,
  Grid2 as Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";
import Link from "next/link";

function _home_content_3() {
  const imageSlider = ["images/bg-example.jpg", "images/bg-example-4.jpg"];
  const [selected, setSelected] = React.useState(0);

  const handleNext = () => {
    setSelected((prev) => (prev + 1) % imageSlider.length);
  };

  const handlePrev = () => {
    setSelected((prev) => (prev - 1 + imageSlider.length) % imageSlider.length);
  };

  return (
    <Box minHeight="500px" position="relative">
      {/* <Box
        sx={{
          height: "200px",
          backgroundSize: "cover",
          backgroundImage: `url('/images/bg-example.jpg')`,

          width: "100vw",
        }}
        zIndex={1}
      ></Box> */}

      <Box position="relative" height="200px">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              height: "200px",
              backgroundColor: "lightgray",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "absolute",
              backgroundImage: `url(${imageSlider[selected]})`,
              backgroundSize: "cover",

              width: "100vw",
              left: -8,
              zIndex: 1,
            }}
          />
        </AnimatePresence>

        <Box
          display="flex"
          gap="5px"
          position="absolute"
          zIndex={1}
          bottom="10px"
          right="15px"
        >
          <IconButton
            sx={{ padding: "5px", height: "30px" }}
            onClick={handlePrev}
          >
            <CirclePrev color="#fff" fontSize="20px" />
          </IconButton>
          <IconButton
            sx={{ padding: "5px", height: "30px" }}
            onClick={handleNext}
          >
            <CircleNext color="#fff" fontSize="20px" />
          </IconButton>
        </Box>
      </Box>

      <Container sx={{ py: "20px" }}>
        <Box
          bgcolor={(props) => props.palette.warning.main}
          display="inline-block"
          pb={1}
          pt={1.2}
          paddingX={1.2}
          mb={1}
        >
          <Typography color="#fff">Sustainable Peatland Agriculture</Typography>
        </Box>
        <Typography variant="h5" color="primary" gutterBottom>
          From Peatland
          <br /> to Our Plate
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Uncover innovative solutions for sustainable farming on peatlands
          through TJF's groundbreaking research.
        </Typography>

        <Link href={`/initiatives/sustainable-peatland-agriculture`}>
          <Button variant="contained" color="success">
            Read Full Story
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default _home_content_3;
