import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import MenuIcon from "@/components/shared/icons/menu";

function _navbar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [bgColor, setBgColor] = useState(props?.bgColor ?? "transparent");
  const [color, setColor] = useState(props?.color ?? "#fff");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setColor("black");
      } else {
        setBgColor("transparent");
        setColor("#fff");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        component="nav"
        display="flex"
        alignItems="center"
        height="60px"
        position="fixed"
        width="100%"
        zIndex={10}
        bgcolor={bgColor}
        boxShadow={
          bgColor === "white" && !props?.disableElevation
            ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
            : "none"
        }
        transition="background-color 0.3s ease"
        borderBottom="1px solid #fff"
      >
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Link href="/">
              <img
                src={
                  bgColor === "white"
                    ? "/images/TJF-Secondary-Blue-logo.png"
                    : "/images/TJF-White-logo.png"
                }
                alt="logo"
                height="35px"
              />
            </Link>

            <Box display="flex" alignItems="center" gap={1}>
              <IconButton>
                <Box display="flex" alignItems="center" gap={1.2}>
                  <GlobeIcon color={color} />
                  <ChevronIcon color={color} />
                </Box>
              </IconButton>

              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon color={color} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          bgcolor={(props) => props.palette.primary.main}
          width="55vw"
          height="100vh"
          padding="10px"
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpenDrawer(false)}>
              <img src="/icons/close-white.svg" width="15px" />
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="center" mt="20px">
            <Link href="/" onClick={() => setOpenDrawer(false)}>
              <img
                src="/images/TJF-Primary-White-small-logo.png"
                width="79px"
                alt="logo"
              />
            </Link>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            px="15px"
            gap="15px"
            mt="30px"
          >
            {React.Children.toArray(
              [
                {
                  name: "Peatland Agriculture Sustainability",
                  link: "/peatland-agriculture-sustainability",
                  desc: "Research",
                },
                {
                  name: "Sustainable Food System",
                  link: "/sustainable-food-system",
                },
                {
                  name: "Coconut Research Center",
                  link: "/coconut-research-center",
                },
                {
                  name: "Coastal Agriculture Water Management",
                  link: "/coastal-agriculture-water-management",
                },
              ].map((item) => (
                <React.Fragment>
                  {item.desc ? (
                    <Typography fontSize="12px" color="#fff">
                      {item.desc}
                    </Typography>
                  ) : null}

                  <Link href={`/research/${item.link}`}>
                    <Typography color="#fff" variant="h6">
                      {item.name}
                    </Typography>
                  </Link>
                </React.Fragment>
              ))
            )}
          </Box>

          <Box display="flex" justifyContent="center" mt="20px">
            <Link href="/">
              <Button variant="contained" color="success">
                Contact Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default _navbar;
