import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

import Link from "next/link";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";

function _our_story_content_1() {
  return (
    <Box data-scroll-section position="relative">
      <Box
        sx={{
          backgroundColor: "#0000005e",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      />

      <Box position="absolute" top="20px" left="50px" zIndex={99}>
        <Link href="/">
          <Box
            component="img"
            height="45px"
            width="140px"
            src={"/images/TJF-White-logo.png"}
            alt="logo"
            sx={{
              filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))",
            }}
          ></Box>
        </Link>
      </Box>

      <IconButton
        sx={{ position: "absolute", top: "20px", right: "50px" }}
        zIndex={99}
      >
        <Box display="flex" alignItems="center" gap={1.2}>
          <GlobeIcon color={"#fff"} />
          <ChevronIcon color={"#fff"} />
        </Box>
      </IconButton>

      <Box
        position="absolute"
        height="100vh"
        width="15px"
        right="0px"
        zIndex={99}
      >
        <Box position="relative" height="100vh" width="0px">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              // left: "-10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                transform: "rotate(270deg)",
                width: "150px",
                p: 1,
                borderRadius: "10px 10px 0px 0px",
                "&:hover": {
                  backgroundColor: (props) => props.palette.primary.main,
                },
              }}
              disableElevation
              disableTouchRipple
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>

      <Box position="absolute" height="100vw" width="100vw" zIndex={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box
            component="img"
            src="/images/our-story/image-2.png"
            alt="comma"
            sx={{ mt: "-300px", mr: "10px" }}
          />

          <Typography variant="h1" color="#fff">
            In different parts of the world,
            <br /> people have different experiences
            <br />
            with food
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url('/images/our-story/image-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          flexShrink: 0, // Agar tidak mengecil saat scroll
        }}
      />
    </Box>
  );
}

export default _our_story_content_1;
