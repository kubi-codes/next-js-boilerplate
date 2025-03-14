import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";

function _navbar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [bgColor, setBgColor] = useState(props?.bgColor ?? "transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor(props?.bgColor ?? "white");
      } else {
        setBgColor(props?.bgColor ?? "transparent");
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
        borderBottom="1px solid #979797"
      >
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Link href="/">
              <img
                src="/images/TJF-Secondary-Blue-logo.png"
                alt="logo"
                height="35px"
              />
            </Link>

            <Box display="flex" alignItems="center" gap={1}>
              <IconButton>
                <Box display="flex" alignItems="center" gap={1.2}>
                  <GlobeIcon color="#000000" />
                  <ChevronIcon color="#000000" />
                </Box>
              </IconButton>

              <IconButton onClick={() => setOpenDrawer(true)}>
                <img src="/icons/menu.svg" />
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
                { name: "Topic", link: "/topic" },
                { name: "Research", link: "/research" },
                { name: "Initiatives", link: "/initiatives" },
                { name: "About Us", link: "/about-us" },
                { name: "Our Approach", link: "/our-approach" },
                { name: "Updates", link: "/updates" },
                { name: "Career", link: "/career" },
              ].map((item) => (
                <Link href={item.link}>
                  <Typography color="#fff" variant="h6">
                    {item.name}
                  </Typography>
                </Link>
              ))
            )}
          </Box>

          <Box display="flex" justifyContent="center" mt="20px">
            <Link href="/contact-us">
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
