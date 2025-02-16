import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function _navbar() {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      height="8vh"
      position="fixed"
      width="100%"
      zIndex={10}
      bgcolor={bgColor}
      boxShadow={
        bgColor === "white" ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"
      }
      transition="background-color 0.3s ease"
    >
      <Container>
        <Grid container alignItems="center">
          <Grid size={{ md: 6 }}>
            <Box display="flex" alignItems="center" gap="40px">
              <Link href="/">
                <Box
                  component="img"
                  height="45px"
                  width="140px"
                  src={
                    bgColor === "white"
                      ? "/images/TJF-Secondary-Blue-logo.png"
                      : "/images/TJF-White-logo.png"
                  }
                  alt="logo"
                ></Box>
              </Link>

              {React.Children.toArray(
                [
                  { name: "Topic", link: "/topic" },
                  { name: "Research", link: "/research" },
                  { name: "Initiatives", link: "/initiatives" },
                ].map((item) => (
                  <Link href={item.link}>
                    <Typography
                      color={bgColor === "white" ? "primary" : "#fff"}
                      variant="h6"
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))
              )}
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap="40px"
            >
              {React.Children.toArray(
                [
                  { name: "About Us", link: "/about-us" },
                  { name: "Updates", link: "/updates" },
                  { name: "Career", link: "/career" },
                  { name: "Contact Us", link: "/contact-us" },
                ].map((item) => (
                  <Link href={item.link}>
                    <Typography
                      color={bgColor === "white" ? "primary" : "#fff"}
                      variant="h6"
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _navbar;
